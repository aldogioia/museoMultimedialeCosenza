import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, combineLatest, Observable, map } from 'rxjs';
import { Exhibition } from '../../model/exhibition';
import {environment} from '../../environments/environment';
import { ContentEntry, ContentStatus, EventSession, OpeningHour, SheetState } from '../../model/content-entry';

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly cacheTtl = 15 * 60 * 1000;
  private readonly cacheVersion = 'v2';
  private readonly platformId = inject(PLATFORM_ID);
  private readonly exhibitionsState = new BehaviorSubject<SheetState<ContentEntry[]>>({ data: [], loading: true, error: false });
  private readonly eventsState = new BehaviorSubject<SheetState<ContentEntry[]>>({ data: [], loading: true, error: false });
  private readonly hoursState = new BehaviorSubject<SheetState<OpeningHour[]>>({ data: [], loading: true, error: false });

  constructor(private http: HttpClient ) {
    this.loadContentTab('Mostre', this.exhibitionsState);
    this.loadContentTab('Eventi', this.eventsState);
    this.loadHoursTab();
  }

  private loadContentTab(tab: 'Mostre' | 'Eventi', subject: BehaviorSubject<SheetState<ContentEntry[]>>): void {
    const cached = this.readCache<ContentEntry[]>(tab);
    if (cached) {
      subject.next({ data: cached, loading: false, error: false });
      return;
    }

    this.http.get(this.sheetUrl(tab), { responseType: 'text' }).subscribe({
      next: csv => {
        const entries = this.parseTable(csv)
          .map((row, index) => this.toContentEntry(row, `${tab.toLowerCase()}-${index + 1}`, tab))
          .filter((entry): entry is ContentEntry => entry !== null);
        const data = (tab === 'Eventi' ? this.groupEventRows(entries) : entries)
          .sort((a, b) => a.sortDate - b.sortDate);
        this.writeCache(tab, data);
        subject.next({ data, loading: false, error: false });
      },
      error: error => {
        console.error(`Impossibile caricare il tab ${tab} da Google Sheets.`, error);
        subject.next({ data: [], loading: false, error: true });
      }
    });
  }

  private loadHoursTab(): void {
    const cached = this.readCache<OpeningHour[]>('Orari');
    if (cached) {
      this.hoursState.next({ data: cached, loading: false, error: false });
      return;
    }

    this.http.get(this.sheetUrl('Orari'), { responseType: 'text' }).subscribe({
      next: csv => {
        const data = this.parseTable(csv)
          .filter(row => this.isPublished(row['pubblicato']))
          .map((row, index) => ({
            exhibitionId: row['mostra_id'] || '',
            exhibitionTitle: row['mostra_titolo'] || '',
            day: row['giorno'] || '',
            hours: row['orario'] || '',
            note: row['note'] || '',
            order: Number(row['ordine']) || index + 1
          }))
          .filter(item => item.exhibitionId && item.day && item.hours)
          .sort((a, b) => a.order - b.order);
        this.writeCache('Orari', data);
        this.hoursState.next({ data, loading: false, error: false });
      },
      error: error => {
        console.error('Impossibile caricare il tab Orari da Google Sheets.', error);
        this.hoursState.next({ data: [], loading: false, error: true });
      }
    });
  }

  private sheetUrl(tab: 'Mostre' | 'Eventi' | 'Orari'): string {
    return `https://docs.google.com/spreadsheets/d/${environment.GOOGLE_SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(tab)}`;
  }

  private parseTable(csv: string): Record<string, string>[] {
    const rows: string[][] = [];
    let row: string[] = [];
    let value = '';
    let quoted = false;

    for (let i = 0; i < csv.length; i++) {
      const char = csv[i];
      const next = csv[i + 1];
      if (char === '"' && quoted && next === '"') {
        value += '"';
        i++;
      } else if (char === '"') {
        quoted = !quoted;
      } else if (char === ',' && !quoted) {
        row.push(value.trim());
        value = '';
      } else if ((char === '\n' || char === '\r') && !quoted) {
        if (char === '\r' && next === '\n') i++;
        row.push(value.trim());
        if (row.some(cell => cell !== '')) rows.push(row);
        row = [];
        value = '';
      } else {
        value += char;
      }
    }
    row.push(value.trim());
    if (row.some(cell => cell !== '')) rows.push(row);
    if (rows.length < 2) return [];

    const headers = rows[0].map(header => header.replace(/^\uFEFF/, '').trim().toLowerCase());
    return rows.slice(1).map(values => Object.fromEntries(headers.map((header, index) => [header, values[index]?.trim() || ''])));
  }

  private toContentEntry(row: Record<string, string>, fallbackId: string, tab: 'Mostre' | 'Eventi'): ContentEntry | null {
    if (!this.isPublished(row['pubblicato']) || !row['titolo']) return null;
    const status = (['current', 'upcoming', 'past'].includes(row['stato']) ? row['stato'] : 'upcoming') as ContentStatus;
    const titles = row['titolo'].split('|').map(title => title.trim()).filter(Boolean);
    const eventDate = tab === 'Eventi' ? row['data_evento'] || '' : '';
    const eventSessions: EventSession[] = eventDate ? [{
      date: eventDate,
      times: row['orari'] || '',
      sortDate: this.dateSortValue(row['data_ordinamento'] || eventDate, status)
    }] : [];

    return {
      id: row['id'] || fallbackId,
      kind: tab === 'Eventi' ? 'event' : 'exhibition',
      titles,
      subtitle: row['sottotitolo'] || null,
      startPeriod: row['periodo_inizio'] || '',
      firstEditionYear: Number(row['anno_prima_edizione']) || null,
      eventSessions,
      description: row['descrizione'] || '',
      trailerLink: row['trailer_url'] || null,
      imageUrl: row['immagine_url'] || 'images/poster_mostra.png',
      nameLink: row['cta_testo'] || 'Acquista biglietti',
      reservationLink: row['biglietti_url'] || null,
      status,
      featured: this.isTruthy(row['in_evidenza']),
      sortDate: this.dateSortValue(row['data_ordinamento'] || eventDate || row['periodo_inizio'], status)
    };
  }

  private groupEventRows(entries: ContentEntry[]): ContentEntry[] {
    const events = new Map<string, ContentEntry>();

    for (const entry of entries) {
      const existing = events.get(entry.id);
      if (!existing) {
        events.set(entry.id, { ...entry, eventSessions: [...entry.eventSessions] });
        continue;
      }

      const sessions = [...existing.eventSessions, ...entry.eventSessions]
        .filter((session, index, all) => all.findIndex(candidate => candidate.date === session.date && candidate.times === session.times) === index)
        .sort((a, b) => a.sortDate - b.sortDate);
      events.set(entry.id, {
        ...existing,
        eventSessions: sessions,
        sortDate: Math.min(existing.sortDate, entry.sortDate)
      });
    }

    return [...events.values()];
  }

  private isPublished(value: string | undefined): boolean {
    return value === undefined || value === '' || this.isTruthy(value);
  }

  private isTruthy(value: string | undefined): boolean {
    return ['1', 'true', 'vero', 'si', 'sì', 'yes', 'x'].includes((value || '').trim().toLowerCase());
  }

  private dateSortValue(value: string | null, status: ContentStatus): number {
    if (!value) return status === 'past' ? 0 : Number.MAX_SAFE_INTEGER;
    const italian = value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
    const normalized = italian ? `${italian[3]}-${italian[2].padStart(2, '0')}-${italian[1].padStart(2, '0')}` : value;
    const timestamp = Date.parse(normalized);
    return Number.isNaN(timestamp) ? Number.MAX_SAFE_INTEGER : timestamp;
  }

  private readCache<T>(tab: string): T | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    try {
      const cacheKey = `mmc-sheet-${this.cacheVersion}-${environment.GOOGLE_SHEET_ID}-${tab}`;
      const raw = sessionStorage.getItem(cacheKey);
      if (!raw) return null;
      const cached = JSON.parse(raw) as { expiresAt: number; data: T };
      if (cached.expiresAt <= Date.now()) {
        sessionStorage.removeItem(cacheKey);
        return null;
      }
      return cached.data;
    } catch {
      return null;
    }
  }

  private writeCache<T>(tab: string, data: T): void {
    if (!isPlatformBrowser(this.platformId)) return;
    try {
      sessionStorage.setItem(`mmc-sheet-${this.cacheVersion}-${environment.GOOGLE_SHEET_ID}-${tab}`, JSON.stringify({ expiresAt: Date.now() + this.cacheTtl, data }));
    } catch {
      // Il sito resta utilizzabile anche se lo storage non è disponibile.
    }
  }

  getExhibitionsByStatus(status: 'current' | 'upcoming' | 'past'): Observable<Exhibition[]> {
    return this.exhibitionsState.asObservable().pipe(
      map(state => state.data.filter(entry => entry.status === status) as Exhibition[])
    );
  }

  getTicketableExhibitions(): Observable<Exhibition[]> {
    return combineLatest([this.exhibitionsState.asObservable(), this.hoursState.asObservable()]).pipe(
      map(([exhibitions, hours]) => exhibitions.data
        .filter(entry => entry.status !== 'past')
        .map(entry => ({
          ...entry,
          timeSlots: hours.data
            .filter(item => item.exhibitionId === entry.id || this.normalizeTitle(item.exhibitionTitle) === this.normalizeTitle(entry.titles.join(' ')))
            .sort((a, b) => a.order - b.order)
            .map(item => `${item.day}: ${item.hours}`),
          notes: hours.data
            .filter(item => item.exhibitionId === entry.id && item.note)
            .map(item => item.note)
        }))
        .filter(entry => entry.timeSlots.length > 0) as Exhibition[])
    );
  }

  private normalizeTitle(value: string): string {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/gi, '').toLowerCase();
  }

  getAllExhibitions(): Observable<Exhibition[]> {
    return this.exhibitionsState.asObservable().pipe(map(state => state.data as Exhibition[]));
  }

  getExhibitionsState(): Observable<SheetState<ContentEntry[]>> {
    return this.exhibitionsState.asObservable();
  }

  getEventsState(): Observable<SheetState<ContentEntry[]>> {
    return this.eventsState.asObservable();
  }

  getHoursState(): Observable<SheetState<OpeningHour[]>> {
    return this.hoursState.asObservable();
  }
}

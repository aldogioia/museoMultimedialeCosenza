import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Exhibition } from '../../model/exhibition';
import {environment} from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly RANGE = 'Foglio1!A:O';

  private allData = new BehaviorSubject<Exhibition[]>([]);

  constructor(private http: HttpClient ) {
    this.fetchDataFromSheets();
  }

  private fetchDataFromSheets() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${environment.GOOGLE_SHEET_ID}/values/${this.RANGE}?key=${environment.GOOGLE_SHEETS_API_KEY}`;

    this.http.get<any>(url).subscribe({
      next: (res) => {
        const rows = res.values;
        if (!rows || rows.length < 2) return;

        const headers = rows[0];

        const mappedData: Exhibition[] = rows.slice(1).map((row: any[]) => {

          const getVal = (colName: string): string | null => {
            const index = headers.indexOf(colName);
            const val = index > -1 ? row[index] : null;
            return val ? val.trim() : null;
          };

          const parseArray = (val: string | null): string[] => {
            return val ? val.split('|').map(s => s.trim()).filter(s => s !== '') : [];
          };

          return {
            titles: parseArray(getVal('titles')),
            subtitle: getVal('subtitle'),
            year: Number(getVal('year')),
            opening: getVal('opening'),
            closing: getVal('closing'),
            duration: getVal('duration') || '',
            period: getVal('period') || '',
            description: getVal('description') || '',
            trailerLink: getVal('trailerLink'),
            imageUrl: getVal('imageUrl') || '',
            nameLink: getVal('nameLink'),
            reservationLink: getVal('reservationLink'),
            status: getVal('status') as 'current' | 'upcoming' | 'past',
            timeSlots: parseArray(getVal('timeSlots')),
            notes: parseArray(getVal('notes'))
          };
        });

        this.allData.next(mappedData);
      },
      error: (err) => {
        console.error("Errore nel caricamento da Google Sheets:", err);
      }
    });
  }

  getExhibitionsByStatus(status: 'current' | 'upcoming' | 'past'): Observable<Exhibition[]> {
    return this.allData.asObservable().pipe(
      map(data => data.filter(e => e.status === status))
    );
  }

  getTicketableExhibitions(): Observable<Exhibition[]> {
    return this.allData.asObservable().pipe(
      map(data => data.filter(e => e.timeSlots && e.timeSlots.length > 0))
    );
  }

  getAllExhibitions(): Observable<Exhibition[]> {
    return this.allData.asObservable();
  }
}

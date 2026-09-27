import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ContentEntry, SheetState } from '../../../model/content-entry';
import { DataService } from '../../services/data-service';

const MONTH_MAP: Record<string, number> = {
  gennaio: 0, febbraio: 1, marzo: 2, aprile: 3,
  maggio: 4, giugno: 5, luglio: 6, agosto: 7,
  settembre: 8, ottobre: 9, novembre: 10, dicembre: 11
};

function parseMonthYear(dateStr?: string): number {
  if (!dateStr) return 0;

  const parts = dateStr.trim().toLowerCase().split(/\s+/);
  if (parts.length < 2) return 0;

  const [monthName, yearStr] = parts;
  const month = MONTH_MAP[monthName] ?? 0;
  const year = parseInt(yearStr, 10) || 0;

  return new Date(year, month, 1).getTime();
}

@Component({
  selector: 'app-events',
  standalone: false,
  templateUrl: './events.html',
  styleUrl: './events.css',
  host: { class: 'page' }
})
export class Events implements OnInit {
  state$!: Observable<SheetState<ContentEntry[]> & { upcoming: ContentEntry[]; past: ContentEntry[] }>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.state$ = this.dataService.getEventsState().pipe(
      map(state => ({
        ...state,
        upcoming: state.data
          .filter(event => event.status !== 'past')
          .sort((a, b) => parseMonthYear(b.startPeriod) - parseMonthYear(a.startPeriod)),

        past: state.data
          .filter(event => event.status === 'past')
          .sort((a, b) => parseMonthYear(b.startPeriod) - parseMonthYear(a.startPeriod))
      }))
    );
  }
}
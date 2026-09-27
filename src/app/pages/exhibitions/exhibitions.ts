import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data-service';
import {map, Observable} from 'rxjs';
import {ContentEntry, SheetState} from '../../../model/content-entry';

const MONTH_MAP: Record<string, number> = {
  gennaio: 0, febbraio: 1, marzo: 2, aprile: 3,
  maggio: 4, giugno: 5, luglio: 6, agosto: 7,
  settembre: 8, ottobre: 9, novembre: 10, dicembre: 11
};

/**
 * Converte "Luglio 2026" in un timestamp/valore numerico confrontabile.
 */
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
  selector: 'app-exhibitions',
  standalone: false,
  templateUrl: './exhibitions.html',
  styleUrl: './exhibitions.css',
  host: {class: 'page'}
})
export class Exhibitions implements OnInit {
  state$!: Observable<SheetState<ContentEntry[]> & {
    current: ContentEntry[];
    upcoming: ContentEntry[];
    past: ContentEntry[];
  }>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.state$ = this.dataService.getExhibitionsState().pipe(
      map(state => ({
        ...state,

        current: state.data
          .filter(exhibition => exhibition.status === 'current')
          .sort((a, b) => parseMonthYear(b.startPeriod) - parseMonthYear(a.startPeriod)),


        upcoming: state.data
          .filter(exhibition => exhibition.status === 'upcoming')
          .sort((a, b) => parseMonthYear(b.startPeriod) - parseMonthYear(a.startPeriod)),


        past: state.data
          .filter(exhibition => exhibition.status === 'past')
          .sort((a, b) => b.sortDate - a.sortDate)
      }))
    );
  }
}
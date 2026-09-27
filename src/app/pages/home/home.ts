import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataService } from '../../services/data-service';
import { ContentEntry, SheetState } from '../../../model/content-entry';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
  host: {class: 'page'},
})
export class Home implements OnInit {
  exhibitionsState$!: Observable<SheetState<ContentEntry[]>>;
  eventsState$!: Observable<SheetState<ContentEntry[]>>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.exhibitionsState$ = this.dataService.getExhibitionsState().pipe(
      map(state => ({ ...state, data: state.data.filter(item => item.status !== 'past').slice(0, 3) }))
    );
    this.eventsState$ = this.dataService.getEventsState().pipe(
      map(state => ({ ...state, data: state.data.filter(item => item.status !== 'past').slice(0, 3) }))
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
  host: {class: 'page'},
})
export class Home implements OnInit {
  hasUpcomingExhibitions$!: Observable<boolean>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.hasUpcomingExhibitions$ = this.dataService.getExhibitionsByStatus('upcoming').pipe(
      map(exhibitions => exhibitions.length > 0)
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Exhibition } from '../../../model/exhibition';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-tickets-time-section',
  standalone: false,
  templateUrl: './tickets-time-section.html',
  styleUrl: './tickets-time-section.css',
})
export class TicketsTimeSection implements OnInit {

  ticketableExhibitions$!: Observable<Exhibition[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.ticketableExhibitions$ = this.dataService.getTicketableExhibitions();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-ticketing',
  standalone: false,
  templateUrl: './ticketing.html',
  styleUrl: './ticketing.css',
  host: { 'class' : 'main' }
})
export class Ticketing {
  times: string[] = [
    '09:00', '10:00', '11:00', '12:00',
    '15:00', '16:00', '17:00',
    '18:00', '19:00'
  ];

}

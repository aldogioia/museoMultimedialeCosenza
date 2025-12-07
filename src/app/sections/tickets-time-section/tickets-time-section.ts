import { Component } from '@angular/core';
import {Ticket} from '../../../model/ticket';

@Component({
  selector: 'app-tickets-time-section',
  standalone: false,
  templateUrl: './tickets-time-section.html',
  styleUrl: './tickets-time-section.css',
})
export class TicketsTimeSection {
  tickets: Ticket[] = [
    new Ticket(
      "Klimt: L'incanto dorato",
      null,
      "Mostra multimediale immersiva dedicata a Gustav Klimt, che esplora la sua arte e il suo mondo interiore attraverso immagini, musica e suggestioni visive.",
      [
        "09:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "12:00 - 13:00",
        "15:00 - 16:00",
        "16:00 - 17:00",
        "17:00 - 18:00",
        "18:00 - 19:00",
        "19:00 - 20:00",
      ],
      [
        "Il turno delle 09:00 - 10:00 non è disponibile la domenica",
        "Il turno delle 15:00 - 16:00 non è disponibile la domenica"
      ],
      "https://www.diyticket.it/artists/4166/klimt-lincanto-dorato"
    ),
    new Ticket(
      "Christmas World Tour",
      "Il sogno di Renzo",
      "Un viaggio magico attraverso le tradizioni natalizie di Cosenza e del Mondo, tramite proiezioni e atmosfere incantate per tutta la famiglia.",
      [
        "09:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "12:00 - 13:00",
        "15:00 - 16:00",
        "16:00 - 17:00",
        "17:00 - 18:00",
        "18:00 - 19:00",
        "19:00 - 20:00",
      ],
      [
        "Il turno delle 09:00 - 10:00 non è disponibile la domenica",
        "Il turno delle 15:00 - 16:00 non è disponibile la domenica"
      ],
      "https://www.diyticket.it/artists/4166/klimt-lincanto-dorato"
    ),
  ]

}

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
        "Da Lun a Sab dalle 09:00 alle 12:00",
        "Domenica dalle 10:00 alle 12:00",
        "Tutti i giorni dalle 15:00 alle 19:00",
      ],
      [
        "Gli orari restano validi anche nei giorni festivi",
        "Arrivare con un anticipo di almeno 15 minuti",
        "I biglietti si acquistano in struttura",
        "La mattina dal Lunedì al Venerdì è riservata per gruppi e scuole"
      ],
      "https://www.diyticket.it/events/arte/29071/klimt-lincanto-dorato-febbraio-202610.00"
    ),
    /*new Ticket(
      "Christmas World Tour",
      "Il sogno di Renzo",
      "Un viaggio magico attraverso le tradizioni natalizie di Cosenza e del Mondo, tramite proiezioni e atmosfere incantate per tutta la famiglia.",
      [
        "Sab 10:00 - 12:00",
        "Dom 11:00 - 12:00",
        "Da Lun a Sab 15:00 - 19:00",
        "Dom 16:00 - 19:00",
      ],
      [
        "Gli orari restano validi anche nei giorni festivi",
        "Arrivare con un anticipo di almeno 15 minuti",
        "I biglietti si acquistano in struttura",
        "La mattina dal Lunedì al Venerdì è riservata per gruppi e scuole"
      ],
      null
    ),*/
  ]

}

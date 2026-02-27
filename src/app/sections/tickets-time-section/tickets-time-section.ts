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
      "Essenza Ensemble",
      "in concerto",
      "Un concerto emozionante che intreccia musica contemporanea e grandi colonne sonore in un’atmosfera intensa e suggestiva. Nella cornice del Museo Multimediale Città di Cosenza, l’esperienza è arricchita dall’ingresso alla mostra multimediale “Klimt: l’incanto dorato”, per un viaggio immersivo tra arte e musica capace di coinvolgere tutti i sensi.",
      [
        "9 Aprile 2026 ore 20:30",
      ],
      [
        "Gli orari restano validi anche nei giorni festivi",
        "Arrivare con un anticipo di almeno 15 minuti",
        "La mattina dal Lunedì al Venerdì è riservata per gruppi e scuole"
      ],
      'https://www.diyticket.it/events/Musica/29765/essenza-ensemble'
    ),
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
        "La mattina dal Lunedì al Venerdì è riservata per gruppi e scuole"
      ],
      "https://www.diyticket.it/events/arte/29071/klimt-lincanto-dorato-febbraio-202610.00"
    ),
  ]

}

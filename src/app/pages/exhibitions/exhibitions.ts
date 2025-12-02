import { Component } from '@angular/core';
import {Exhibition} from '../../../model/exhibition';

@Component({
  selector: 'app-exhibitions',
  standalone: false,
  templateUrl: './exhibitions.html',
  styleUrl: './exhibitions.css',
  host: {class: 'page'}
})
export class Exhibitions {
  protected exhibitions: Exhibition[] = [
    new Exhibition(
      ["Klimt: L'incanto dorato"],
      null,
      2025,
      null,
      "31 Nov 2025",
      "45 - 60 minuti",
      "Set - Nov 2025",
      "Mostra multimediale immersiva dedicata a Gustav Klimt, che esplora la sua arte e il suo mondo interiore attraverso immagini, musica e suggestioni visive.",
      "https://museo-multimediale-cosenza.s3.eu-north-1.amazonaws.com/AD-mostra.jpeg",
      null
    ),
  ];

  protected upcomingExhibitions: Exhibition[] = [
    new Exhibition(
      ["Christmas", "World Tour"],
      "Il sogno di Renzo",
      2025,
      "1 Dic 2025",
      null,
      "45 - 60 minuti",
      "Dic - Gen 2026",
      "Un viaggio magico attraverso le tradizioni natalizie di Cosenza e del Mondo, tramite proiezioni e atmosfere incantate per tutta la famiglia.",
      "images/locandina_natale.jpeg",
      ""
    ),
  ];

  protected pastExhibitions: Exhibition[] = [
    new Exhibition(
      ["Klimt: L'incanto dorato"],
      null,
      2025,
      null,
      null,
      "",
      "Set - Nov 2025",
      "Mostra multimediale immersiva dedicata a Gustav Klimt, che esplora la sua arte e il suo mondo interiore attraverso immagini, musica e suggestioni visive.",
      "https://museo-multimediale-cosenza.s3.eu-north-1.amazonaws.com/AD-mostra.jpeg",
      null
    ),
    new Exhibition(
      ["Leonardo Da Vinci"],
      null,
      2019,
      "",
      "",
      "",
      "Gen - Apr 2019",
      "Celebrazione della vita e delle invenzioni di Leonardo da Vinci attraverso un percorso di apprendimento innovativo con proiezioni e ambientazioni interattive.",
      "images/leonardo.jpg",
      null
    ),
  ]
}

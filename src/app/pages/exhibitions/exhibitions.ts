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
      "31 Gen 2025",
      "45 minuti",
      "Set - Gen 2025",
      "Mostra multimediale immersiva dedicata a Gustav Klimt, che esplora la sua arte e il suo mondo interiore attraverso immagini, musica e suggestioni visive.",
      "videos/KLIMT_teaser_web.mp4",
      "https://museo-multimediale-cosenza.s3.eu-north-1.amazonaws.com/AD-mostra.jpeg",
      null,
      null
    ),
    new Exhibition(
      ["Christmas", "World Tour"],
      "Il sogno di Renzo",
      2025,
      "1 Dic 2025",
      null,
      "35 minuti",
      "Dic - Gen 2026",
      "Un viaggio magico attraverso le tradizioni natalizie di Cosenza e del Mondo, tramite proiezioni e atmosfere incantate per tutta la famiglia.",
      "videos/teaser_natale.mov",
      "images/christmas_world_tour.jpeg",
      null,
      null
    ),
  ];

  protected upcomingExhibitions: Exhibition[] = [
    new Exhibition(
      ["XMAS", "La festa di natale"],
      "Al Museo Mutlimediale",
      2025,
      "25 Dic 2025",
      null,
      "Tutta la notte",
      "25 Dic 2025",
      "Il Museo Multimediale si trasforma per una scintillante festa di Natale tra luci, atmosfere digitali e musica. Una notte speciale con DJ set e vibrazioni uniche per celebrare il 25 dicembre in grande stile.",
      null,
      "images/natale_al_museo.jpeg",
      "Chiama e prenota ora",
      "tel:3928716904"
    ),
  ];

  protected pastExhibitions: Exhibition[] = [
    new Exhibition(
      ["Atlanthis"],
      "La città sommersa",
      2019,
      "",
      "",
      "",
      "Giu - Set 2019",
      "Un viaggio emozionante nel mistero di Atlantide: tra installazioni multimediali e fisiche, la leggenda prende vita, coinvolgendo il pubblico in un’esperienza immersiva.",
      null,
      "images/atlanthis.jpg",
      null,
      null
    ),
    new Exhibition(
      ["Leonardo Da Vinci"],
      null,
      2019,
      null,
      null,
      "",
      "Gen - Apr 2019",
      "Celebrazione della vita e delle invenzioni di Leonardo da Vinci attraverso un percorso di apprendimento innovativo con proiezioni e ambientazioni interattive.",
      null,
      "images/leonardo.jpg",
      null,
      null
    ),
    new Exhibition(
      ["Van Gogh Alive"],
      "The experience",
      2018,
      null,
      null,
      "",
      "Set - Nov 2018",
      "Un’esperienza immersiva nei capolavori di Van Gogh: proiezioni, musiche e scenografie coinvolgenti rivelano la forza emotiva del suo linguaggio pittorico.",
      null,
      "images/vangogh.jpg",
      null,
      null
    ),
    new Exhibition(
      ["Nome in codice Sira"],
      "Missione Alarico",
      2018,
      null,
      null,
      "",
      "Giu - Ago 2018",
      "Un viaggio spaziale e narrativo tra passato e presente che unisce archeologia, storia e tecnologia per svelare il mistero della Menorah e la figura di Alarico.",
      null,
      "images/sira.jpg",
      null,
      null
    ),
  ]
}

import { Component } from '@angular/core';
import {Typology} from '../../../model/typology';
import {CoPresentIcon, Store03Icon, WorkIcon} from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-typologies-section',
  standalone: false,
  templateUrl: './typologies-section.html',
  styleUrl: './typologies-section.css',
})
export class TypologiesSection {
  typologies: Typology[] = [
    new Typology(
      WorkIcon,
      "Eventi Corporate",
      "Meeting, convention, team building e presentazioni aziendali",
      [
        "Servizio catering",
        "Regia audio/video",
        "Assistenza tecnica"
      ],
      "images/convegno_1.jpeg"
    ),
    new Typology(
      Store03Icon,
      "Fiere",
      "Esposizioni commerciali, saloni e marketplace B2B",
      [
        "Allestimento stand",
        "Connettività dedicata",
        "Coffee break incluso"
      ],
      "images/fiera.jpg"
    ),
    new Typology(
      CoPresentIcon,
      "Conferenze",
      "Convegni, seminari, workshop e presentazioni pubbliche",
      [
        "Scenografie personalizzate",
        "Media coverage",
        "Regia audio/video",
      ],
      "images/convegno.jpg"
    ),
    /*new Typology(
      Mortarboard02Icon,
      "Formazione",
      "Corsi, training aziendali e sessioni formative",
      [
        "Postazioni singole",
        "Materiale didattico",
        "Coffee break incluso"
      ]
    ),*/
  ]
}

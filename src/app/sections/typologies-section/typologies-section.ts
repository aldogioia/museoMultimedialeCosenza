import { Component } from '@angular/core';
import {Typology} from '../../../model/typology';
import {CoPresentIcon, Mortarboard02Icon, SparklesIcon, Store03Icon, WorkIcon} from '@hugeicons/core-free-icons';

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
      ]
    ),
    new Typology(
      Store03Icon,
      "Fiere",
      "Esposizioni commerciali, saloni e marketplace B2B",
      [
        "Allestimento stand",
        "Connettività dedicata",
        "Gestione accessi"
      ]
    ),
    new Typology(
      SparklesIcon,
      "Lanci Prodotto",
      "Product launch, press conference e unveiling eventi",
      [
        "Scenografie personalizzate",
        "Media coverage",
        "Photo booth professionale"
      ]
    ),
    new Typology(
      CoPresentIcon,
      "Conferenze",
      "Convegni, seminari, workshop e presentazioni pubbliche",
      [
        "Sistema traduzione simultanea",
        "Streaming live",
        "App gestione evento"
      ]
    ),
    new Typology(
      Mortarboard02Icon,
      "Formazione",
      "Corsi, training aziendali e sessioni formative",
      [
        "Postazioni singole",
        "Materiale didattico",
        "Coffee break incluso"
      ]
    ),
  ]
}

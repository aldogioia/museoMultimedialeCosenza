import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
  host: {"class": "main"}
})
export class Home {
  indexHero: number = 0;
  indexBanner: number = 0;

  images: String[] = [
    'images/hero1.jpeg',
    'images/hero2.jpg',
  ];

  captions: String[] = [
    'Titolo 1',
    'Titolo 2',
  ]

  descriptions: String[] = [
    'Descrizione 1',
    'Descrizione 2',
  ];
}

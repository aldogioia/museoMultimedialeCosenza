import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css',
  host: { class: 'main' }
})
export class About {
  images: String[] = [
    'images/klimt.png',
    'images/vangogh.jpg',
    'images/leonardo.jpg',
    'images/pinocchio.jpg',
    'images/convegno.jpg',
    'images/fiera.jpg'
  ];

}

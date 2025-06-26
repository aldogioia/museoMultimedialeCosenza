import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  images: String[] = ['hero2.jpg', 'hero2.jpg', 'hero2.jpg', 'hero2.jpg', 'hero2.jpg', 'hero2.jpg', 'hero2.jpg'];

}

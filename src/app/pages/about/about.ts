import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  images: String[] = ['images/vangogh2.jpg', 'images/vangogh.jpg', 'images/vangogh2.jpg', 'images/vangogh.jpg', 'images/vangogh2.jpg', 'images/vangogh.jpg'];

}

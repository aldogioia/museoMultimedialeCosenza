import {Component, Input} from '@angular/core';
import {PastExhibitionDto} from '../../../model/dto/PastExhibitionDto';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
  host: { class: 'container' }
})
export class Gallery {
  @Input() exhibitions: PastExhibitionDto[] = [];

  @Input() galleryImages: string[] = [];
}

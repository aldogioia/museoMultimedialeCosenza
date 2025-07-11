import {Component, Input} from '@angular/core';
import {ExhibitionDto} from '../../../model/dto/ExhibitionDto';

@Component({
  selector: 'app-exhibition',
  standalone: false,
  templateUrl: './exhibition.html',
  styleUrl: './exhibition.css',
  host: {class: 'wrapper-exhibition'}
})
export class Exhibition {
  @Input({ required: true }) exhibition!: ExhibitionDto;

  today: Date = new Date();
}

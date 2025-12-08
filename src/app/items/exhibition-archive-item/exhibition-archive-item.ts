import {Component, Input} from '@angular/core';
import {Exhibition} from '../../../model/exhibition';

@Component({
  selector: 'app-exhibition-archive-item',
  standalone: false,
  templateUrl: './exhibition-archive-item.html',
  styleUrl: './exhibition-archive-item.css',
})
export class ExhibitionArchiveItem {
  @Input({required:true}) exhibition!: Exhibition;
}

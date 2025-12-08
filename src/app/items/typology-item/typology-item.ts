import {Component, Input} from '@angular/core';
import {Typology} from '../../../model/typology';

@Component({
  selector: 'app-typology-item',
  standalone: false,
  templateUrl: './typology-item.html',
  styleUrl: './typology-item.css',
})
export class TypologyItem {
  @Input({required: true}) item!: Typology;
}

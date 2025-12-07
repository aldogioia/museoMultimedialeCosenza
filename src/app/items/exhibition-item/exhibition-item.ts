import {Component, Input} from '@angular/core';
import {ArrowRight02Icon, Calendar03Icon} from "@hugeicons/core-free-icons";
import {Exhibition} from '../../../model/exhibition';

@Component({
  selector: 'app-exhibition-item',
  standalone: false,
  templateUrl: './exhibition-item.html',
  styleUrl: './exhibition-item.css',
})
export class ExhibitionItem {
  protected readonly ArrowRight02Icon = ArrowRight02Icon;

  @Input({required:true}) exhibition!: Exhibition;
  @Input({required:false}) isReverse: boolean = false;
  protected readonly Calendar03Icon = Calendar03Icon;
}

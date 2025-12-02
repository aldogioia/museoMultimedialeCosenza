import {Component, Input} from '@angular/core';
import {ArrowRight02Icon, Calendar01FreeIcons} from "@hugeicons/core-free-icons";
import {Exhibition} from '../../../model/exhibition';

@Component({
  selector: 'app-exhibition-item',
  standalone: false,
  templateUrl: './exhibition-item.html',
  styleUrl: './exhibition-item.css',
})
export class ExhibitionItem {
  protected readonly ArrowRight02Icon = ArrowRight02Icon;
  protected readonly Calendar01FreeIcons = Calendar01FreeIcons;

  @Input({required:true}) exhibition!: Exhibition;
  @Input({required:false}) isReverse: boolean = false;
}

import { Component, HostBinding, Input } from '@angular/core';
import { ArrowRight02Icon, Calendar03Icon, PlayIcon } from "@hugeicons/core-free-icons";
import { ContentEntry } from '../../../model/content-entry';

@Component({
  selector: 'app-exhibition-item',
  standalone: false,
  templateUrl: './exhibition-item.html',
  styleUrl: './exhibition-item.css',
})
export class ExhibitionItem {
  protected readonly ArrowRight02Icon = ArrowRight02Icon;

  @Input({required:true}) exhibition!: ContentEntry;
  @Input({required:false}) isReverse: boolean = false;

  @HostBinding('class.reverse')
  get reverse(): boolean {
    return this.isReverse;
  }

  protected readonly Calendar03Icon = Calendar03Icon;
  protected readonly PlayIcon = PlayIcon;
}

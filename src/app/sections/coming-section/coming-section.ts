import { Component } from '@angular/core';
import {ArrowRight02Icon, Calendar03Icon} from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-coming-section',
  standalone: false,
  templateUrl: './coming-section.html',
  styleUrl: './coming-section.css',
})
export class ComingSection {

  protected readonly ArrowRight02Icon = ArrowRight02Icon;
  protected readonly Calendar03Icon = Calendar03Icon;
}

import { Component } from '@angular/core';
import {ArrowRight02Icon, UserMultipleIcon} from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-spaces-details-section',
  standalone: false,
  templateUrl: './spaces-details-section.html',
  styleUrl: './spaces-details-section.css',
})
export class SpacesDetailsSection {
  protected readonly UserMultipleIcon = UserMultipleIcon;
  protected readonly ArrowRight02Icon = ArrowRight02Icon;
}

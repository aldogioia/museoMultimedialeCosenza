import { Component } from '@angular/core';
import {ArrowRight02Icon} from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-spaces-hero-section',
  standalone: false,
  templateUrl: './spaces-hero-section.html',
  styleUrls: ['./spaces-hero-section.css', '../../../shared-styles/hero.css'],
})
export class SpacesHeroSection {
  protected readonly ArrowRight02Icon = ArrowRight02Icon;

}

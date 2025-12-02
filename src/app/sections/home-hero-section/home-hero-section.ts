import { Component } from '@angular/core';
import {ArrowRight02Icon, PlayIcon} from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-home-hero-section',
  standalone: false,
  templateUrl: './home-hero-section.html',
  styleUrls: ['./home-hero-section.css', '../../../shared-styles/hero.css'],
})
export class HomeHeroSection {
  protected readonly ArrowRight02Icon = ArrowRight02Icon;
  protected readonly PlayIcon = PlayIcon;
}

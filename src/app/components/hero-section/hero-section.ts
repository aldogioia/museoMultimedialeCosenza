import { Component } from '@angular/core';
import {ArrowRight02Icon, PlayIcon} from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-hero-section',
  standalone: false,
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  protected readonly ArrowRight02Icon = ArrowRight02Icon;
  protected readonly PlayIcon = PlayIcon;
}

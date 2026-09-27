import { Component } from '@angular/core';
import { ArrowRight02Icon } from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-private-parties-hero-section',
  standalone: false,
  templateUrl: './private-parties-hero-section.html',
  styleUrls: ['./private-parties-hero-section.css', '../../../shared-styles/hero.css']
})
export class PrivatePartiesHeroSection {
  protected readonly ArrowRight02Icon = ArrowRight02Icon;
}

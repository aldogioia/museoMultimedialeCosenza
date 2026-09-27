import { Component } from '@angular/core';
import { ArrowRight02Icon } from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-home-hero-section',
  standalone: false,
  templateUrl: './home-hero-section.html',
  styleUrl: './home-hero-section.css',
})
export class HomeHeroSection {
  protected readonly ArrowRight02Icon = ArrowRight02Icon;
}

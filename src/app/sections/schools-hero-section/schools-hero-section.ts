import { Component } from '@angular/core';
import {ArrowRight02Icon} from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-schools-hero-section',
  standalone: false,
  templateUrl: './schools-hero-section.html',
  styleUrls: ['./schools-hero-section.css', '../../../shared-styles/hero.css'],
})
export class SchoolsHeroSection {

  protected readonly ArrowRight02Icon = ArrowRight02Icon;
}

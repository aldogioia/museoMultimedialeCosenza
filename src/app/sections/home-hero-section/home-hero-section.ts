import { Component, OnInit } from '@angular/core';
import { ArrowRight02Icon, DateTimeIcon, PlayIcon } from '@hugeicons/core-free-icons';
import { Observable, map } from 'rxjs';
import { Exhibition } from '../../../model/exhibition';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-home-hero-section',
  standalone: false,
  templateUrl: './home-hero-section.html',
  styleUrls: ['./home-hero-section.css', '../../../shared-styles/hero.css'],
})
export class HomeHeroSection implements OnInit {
  featuredExhibition$!: Observable<Exhibition | undefined>;

  protected readonly ArrowRight02Icon = ArrowRight02Icon;
  protected readonly PlayIcon = PlayIcon;
  protected readonly DateTimeIcon = DateTimeIcon;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.featuredExhibition$ = this.dataService.getExhibitionsByStatus('current').pipe(
      map(exhibitions => exhibitions.length > 0 ? exhibitions[0] : undefined)
    );
  }
}

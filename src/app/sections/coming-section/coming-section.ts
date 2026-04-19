import { Component, OnInit } from '@angular/core';
import { ArrowRight02Icon, Calendar03Icon, PlayIcon } from '@hugeicons/core-free-icons';
import { Observable, map } from 'rxjs';
import { Exhibition } from '../../../model/exhibition';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-coming-section',
  standalone: false,
  templateUrl: './coming-section.html',
  styleUrl: './coming-section.css',
})
export class ComingSection implements OnInit {
  upcomingExhibition$!: Observable<Exhibition | undefined>;

  protected readonly ArrowRight02Icon = ArrowRight02Icon;
  protected readonly Calendar03Icon = Calendar03Icon;
  protected readonly PlayIcon = PlayIcon;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.upcomingExhibition$ = this.dataService.getExhibitionsByStatus('upcoming').pipe(
      map(exhibitions => exhibitions.length > 0 ? exhibitions[0] : undefined)
    );
  }
}

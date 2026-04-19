import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data-service';
import {Exhibition} from '../../../model/exhibition';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-exhibitions',
  standalone: false,
  templateUrl: './exhibitions.html',
  styleUrl: './exhibitions.css',
  host: {class: 'page'}
})
export class Exhibitions implements OnInit {
  currentExhibitions$!: Observable<Exhibition[]>;
  upcomingExhibitions$!: Observable<Exhibition[]>;
  pastExhibitions$!: Observable<Exhibition[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.currentExhibitions$ = this.dataService.getExhibitionsByStatus('current');
    this.upcomingExhibitions$ = this.dataService.getExhibitionsByStatus('upcoming');
    this.pastExhibitions$ = this.dataService.getExhibitionsByStatus('past');
  }
}

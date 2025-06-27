import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-exhibition',
  standalone: false,
  templateUrl: './exhibition.html',
  styleUrl: './exhibition.css',
  host: {'class': 'main'}
})
export class Exhibition implements OnInit{
  image: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //this.image = <string> this.route.snapshot.paramMap.get('image');
  }
}

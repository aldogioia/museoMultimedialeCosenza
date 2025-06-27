import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-exhibitions',
  standalone: false,
  templateUrl: './exhibitions.html',
  styleUrl: './exhibitions.css',
  host: { 'class' : 'main' }
})

export class Exhibitions implements AfterViewInit {
  nextExhibitions: string[] = [];
  nowExhibitions: string[] = [];
  pastExhibitions: string[] = [
    'NOME IN CODICE SIRA: MISSIONE ALARICO',
    'VAN GOGH ALIVE',
    'LA MAGIA DEL NATALE',
    'LEONARDO DA VINCI',
    'ATLANTHIS: LA CITTA’ SOMMERSA',
  ];
  images: string[] = [
    'images/siro.jpg',
    'images/vangogh2.jpg',
    'images/natale.jpg',
    'images/leonardo.jpg',
    'images/atlanthis.jpg',
  ];


  constructor(
    private el: ElementRef,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    const exhibition = this.el.nativeElement.querySelectorAll('.exhibition');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5,
    });

    exhibition.forEach((p: HTMLElement) => observer.observe(p));
  }

  goToExhibition(i: number) {
    this.router.navigate(['/exhibition', this.images[i]]).then(() => {});
  }
}

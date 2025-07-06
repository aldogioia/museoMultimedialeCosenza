import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-exhibition',
  standalone: false,
  templateUrl: './exhibition.html',
  styleUrl: './exhibition.css',
  host: {'class': 'main'}
})
export class Exhibition implements OnInit, AfterViewInit {
  @ViewChild('container') containerRef!: ElementRef<HTMLDivElement>;

  images: string[] = ["images/atlanthis.jpg", "images/leonardo.jpg", "images/leonardo2.jpg", "images/siro.jpg", "images/vangogh.jpg", "images/vangogh2.jpg"];
  image: string = '';

  containerTop = 0;
  horizontalScrollLength = 0;
  windowHeight = window.innerHeight;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.image = <string>this.route.snapshot.paramMap.get('image');
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const container = this.containerRef.nativeElement;
      this.containerTop = container.getBoundingClientRect().top + window.scrollY;
      this.horizontalScrollLength = container.scrollWidth - container.clientWidth;
    }, 500); // attesa per immagini caricate
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    const container = this.containerRef.nativeElement;
    const scrollStart = this.containerTop;
    const scrollEnd = scrollStart + this.horizontalScrollLength;

    if (scrollY >= scrollStart && scrollY <= scrollEnd) {
      const scrollOffset = scrollY - scrollStart;
      container.querySelector('.horizontal-gallery')!.setAttribute(
        'style',
        `transform: translateX(-${scrollOffset}px);`
      );
    }
  }
}

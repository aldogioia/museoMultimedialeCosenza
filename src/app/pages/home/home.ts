import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
  host: { class: 'main' }
})
export class Home implements AfterViewInit {
  @ViewChild('videoPlayer', { static: true }) video!: ElementRef<HTMLVideoElement>;
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLElement>;

  indexHero: number = 0;
  indexBanner: number = 0;

  images: String[] = [
    'images/hero1.jpeg',
    'images/hero2.jpg',
  ];

  captions: String[] = [
    'Titolo 1',
    'Titolo 2',
  ]

  descriptions: String[] = [
    'Descrizione 1',
    'Descrizione 2',
  ];

  constructor(private el: ElementRef) {
  }

  videoDuration = 0;

  ngAfterViewInit(): void {
    const videoElement = this.video.nativeElement;

    videoElement.addEventListener('loadedmetadata', () => {
      this.videoDuration = videoElement.duration;
    });

    window.addEventListener('scroll', this.onScroll.bind(this));

    const exhibition = this.el.nativeElement.querySelectorAll('.to-reveal');

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

  onScroll() {
    const spacer = this.scrollContainer.nativeElement;
    const rect = spacer.getBoundingClientRect();

    const totalScroll = spacer.offsetHeight - window.innerHeight;

    const scrollProgress = Math.min(Math.max(-rect.top / totalScroll, 0), 1);

    this.video.nativeElement.currentTime = scrollProgress * this.videoDuration;
  }

}

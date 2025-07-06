import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
  host: { class: 'main' }
})
export class Home implements AfterViewInit {
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLElement>;
  @ViewChild('videoPlayer', { static: true }) video!: ElementRef<HTMLVideoElement>;
  @ViewChild('stickyBox') stickyRef!: ElementRef<HTMLDivElement>;

  image: String = "images/vangogh.jpg";

  images: ClothStruct[] = [
    {
      image: 'images/planimetria.png',
      title: 'Museo in Mostra',
    },
    {
      image: 'images/planimetria_mostra.png',
      title: 'Museo in Convegno',
    },
    {
      image: 'images/vangogh2.jpg',
      title: 'Museo in Fiera',
    }
  ];

  currentIndex = 0;
  numSections = this.images.length;
  windowHeight = window.innerHeight;
  scrollStart = 0;

  constructor(private el: ElementRef) {}

  videoDuration = 0;

  ngAfterViewInit(): void {
    this.scrollStart = this.stickyRef.nativeElement.getBoundingClientRect().top + window.scrollY;

    const videoElement = this.video.nativeElement;

    videoElement.addEventListener('loadedmetadata', () => {
      this.videoDuration = videoElement.duration;
    });

    window.addEventListener('scroll', this.onScroll.bind(this));

    const exhibition = this.el.nativeElement.querySelectorAll('.to-reveal, .to-fade');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;

          if (el.classList.contains('to-reveal')) {
            el.classList.add('reveal');
          } else if (el.classList.contains('to-fade')) {
            el.classList.add('fade');
          }

          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5,
    });

    exhibition.forEach((p: HTMLElement) => observer.observe(p));
  }

  onScroll() {
    // VIDEO SCROLL
    const spacer = this.scrollContainer.nativeElement;
    const rect = spacer.getBoundingClientRect();

    const totalScroll = spacer.offsetHeight - window.innerHeight;

    const scrollProgress = Math.min(Math.max(-rect.top / totalScroll, 0), 1);

    this.video.nativeElement.currentTime = scrollProgress * this.videoDuration;

    // STICKY BOX
    const scrollY = window.scrollY;
    const sectionTop = this.scrollStart;
    const sectionHeight = this.windowHeight * this.numSections;

    if (scrollY < sectionTop || scrollY > sectionTop + sectionHeight) return;

    const relativeScroll = scrollY - sectionTop;
    const maxScroll = this.windowHeight * (this.numSections - 1);

    const scrollClamped = Math.min(relativeScroll, maxScroll);
    this.currentIndex = Math.floor(scrollClamped / this.windowHeight);
  }

  getProgressForBar(index: number): number {
    const scrollY = window.scrollY;
    const sectionTop = this.scrollStart;

    if (scrollY < sectionTop) return 0;

    const relativeScroll = scrollY - sectionTop;
    const sectionHeight = this.windowHeight;

    const start = index * sectionHeight;
    const end = (index + 1) * sectionHeight;

    if (relativeScroll < start) return 0;
    if (relativeScroll >= end) return 100;

    return ((relativeScroll - start) / sectionHeight) * 100;
  }

}

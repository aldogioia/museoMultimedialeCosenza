import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {MuseumService} from '../../../model/struct/MuseumService';

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

  //@ViewChild('stickyBox') stickyRef!: ElementRef<HTMLDivElement>;

  @ViewChild('bannerVideo') bannerVideo!: ElementRef<HTMLVideoElement>;

  muted: boolean = true;

  image: String = "images/klimt.png";

  cards: MuseumService[] = [  new MuseumService(
    "images/klimt.png",
    "Mostre Multimediali",
    "Un'esperienza immersiva dove l’arte prende vita tra luci, suoni e movimento."
  ),
    new MuseumService(
      "images/convegno.jpg",
      "Eventi e Convegni",
      "Uno spazio all’avanguardia che unisce eleganza e tecnologia per ogni occasione."
    ),
    new MuseumService(
      "images/bambini.jpg",
      "Percorsi Educativi",
      "Laboratori e attività coinvolgenti per ispirare le menti più giovani attraverso l’arte."
    ),
    new MuseumService(
      "images/fiera.jpg",
      "Spazi per Fiere ed Esposizioni",
      "Ambienti versatili per ospitare eventi espositivi, culturali e commerciali di ogni tipo."
    )
  ];

  //currentIndex = 0;
  //numSections = this.images.length;
  //windowHeight = window.innerHeight;
  //scrollStart = 0;

  constructor(private el: ElementRef) {}

  videoDuration = 0;

  ngAfterViewInit(): void {
    //this.scrollStart = this.stickyRef.nativeElement.getBoundingClientRect().top + window.scrollY;

    const videoElement = this.video.nativeElement;

    videoElement.addEventListener('loadedmetadata', () => {
      this.videoDuration = videoElement.duration;
    });

    window.addEventListener('scroll', this.onBannerVideoScroll.bind(this));
    window.addEventListener('scroll', this.onScroll.bind(this));

    /*const btn = this.el.nativeElement.querySelector('.row');

    const minOpacity = 0;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const maxScroll = 100;
      const clampedScroll = Math.min(scrollY, maxScroll);
      const scale = 1 - (clampedScroll / maxScroll);
      const opacity = minOpacity + (1 - minOpacity) * scale;

      btn.style.opacity = `${opacity}`;
    });*/


    /*const exhibition = this.el.nativeElement.querySelectorAll('.to-reveal, .to-fade');

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

    exhibition.forEach((p: HTMLElement) => observer.observe(p));*/
  }

  onBannerVideoScroll() {
    const video = this.bannerVideo?.nativeElement;
    if (!video) return;

    const maxScroll = 200;
    const scrollY = window.scrollY;
    const clamped = Math.min(scrollY, maxScroll);
    const progress = clamped / maxScroll;

    // dimensioni dinamiche
    const minWidth = 90; // in vw
    const maxWidth = 100;
    const width = minWidth + (maxWidth - minWidth) * progress;

    const minRadius = 2.3; // in rem
    const maxRadius = 0;
    const radius = minRadius + (maxRadius - minRadius) * progress;

    video.style.borderRadius = `${radius}rem`;
    video.style.width = `${width}vw`;
  }

  onScroll() {
    // VIDEO SCROLL
    const spacer = this.scrollContainer.nativeElement;
    const rect = spacer.getBoundingClientRect();

    const totalScroll = spacer.offsetHeight - window.innerHeight;

    const scrollProgress = Math.min(Math.max(-rect.top / totalScroll, 0), 1);

    this.video.nativeElement.currentTime = scrollProgress * this.videoDuration;

    // STICKY BOX
    /*const scrollY = window.scrollY;
    const sectionTop = this.scrollStart;
    const sectionHeight = this.windowHeight * this.numSections;

    if (scrollY < sectionTop || scrollY > sectionTop + sectionHeight) return;

    const relativeScroll = scrollY - sectionTop;
    const maxScroll = this.windowHeight * (this.numSections - 1);

    const scrollClamped = Math.min(relativeScroll, maxScroll);
    this.currentIndex = Math.floor(scrollClamped / this.windowHeight);*/
  }

  /*
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
  */
}

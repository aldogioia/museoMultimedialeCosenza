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

  @ViewChild('bannerVideo') bannerVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('scrollWrapper') scrollWrapper!: ElementRef<HTMLElement>;

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

  videoVisible: number = 0;

  ngAfterViewInit(): void {
    if (this.bannerVideo && this.scrollWrapper) {
      this.setWrapperHeight(); // Imposta l'altezza all'avvio
      window.addEventListener('scroll', this.onBannerVideoScroll, { passive: true });
      window.addEventListener('resize', this.onResize);
    }
  }

  onResize = () => {
    this.setWrapperHeight();
  }

  setWrapperHeight = () => {
    const wrapper = this.scrollWrapper.nativeElement;
    const finalHeightPx = window.innerWidth * (9 / 16);
    const scrollAnimationDistance = window.innerHeight;
    wrapper.style.height = `${scrollAnimationDistance + finalHeightPx}px`;
  }

  onBannerVideoScroll = () => {
    const video = this.bannerVideo?.nativeElement;
    if (!video) return;

    const scrollWrapper = this.scrollWrapper?.nativeElement;
    if (!scrollWrapper) return;

    const wrapperRect = scrollWrapper.getBoundingClientRect();
    const stickyTopValue = 83;

    const animationDistance = window.innerHeight;

    const scrolledDistance = stickyTopValue - wrapperRect.top;

    if (scrolledDistance < 0) {
      video.style.width = '90vw';
      video.style.height = '100vh';
      video.style.borderRadius = '2.3rem';
      return;
    }

    if (scrolledDistance >= animationDistance) {
      video.style.width = '100vw';
      video.style.borderRadius = '0rem';
      const finalHeight = window.innerWidth * (9 / 16);
      video.style.height = `${finalHeight}px`;
      return;
    }

    let progress = scrolledDistance / animationDistance;

    const widthVW = 90 + (10) * progress;

    const initialHeightPx = window.innerHeight;
    const finalHeightPx = window.innerWidth * (9 / 16);
    const heightPx = initialHeightPx - (initialHeightPx - finalHeightPx) * progress;

    const radius = 2.3 - (2.3 * progress);

    video.style.width = `${widthVW}vw`;
    video.style.height = `${heightPx}px`;
    video.style.borderRadius = `${radius}rem`;
  }
}

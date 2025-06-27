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

  image: String = "images/vangogh.jpg";
  constructor(private el: ElementRef) {}

  videoDuration = 0;

  ngAfterViewInit(): void {
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
    const spacer = this.scrollContainer.nativeElement;
    const rect = spacer.getBoundingClientRect();

    const totalScroll = spacer.offsetHeight - window.innerHeight;

    const scrollProgress = Math.min(Math.max(-rect.top / totalScroll, 0), 1);

    this.video.nativeElement.currentTime = scrollProgress * this.videoDuration;
  }

}

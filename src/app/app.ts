import {AfterViewInit, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected title = 'museoMultimedialeCosenza';
  initialSize: number = 150;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const logo = this.el.nativeElement.querySelector('.logo');
    const title = this.el.nativeElement.querySelectorAll('h1, section > p');

    const minOpacity = 0;
    const minHeight = 61;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const maxScroll = 100;
      const clampedScroll = Math.min(scrollY, maxScroll);
      const scale = 1 - (clampedScroll / maxScroll);
      const height = minHeight + (this.initialSize - minHeight) * scale;
      const opacity = minOpacity + (1 - minOpacity) * (scale);

      title.forEach( (el: HTMLElement) => { el.style.opacity = `${opacity}`; });
      logo.style.height = `${height}px`;
    });
  }
}

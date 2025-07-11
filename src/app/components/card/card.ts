import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {MuseumService} from '../../../model/struct/MuseumService';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css',
  host: { class: 'cards' }
})
export class Card {
  @Input({required: true}) cards!: MuseumService[];
  @ViewChild('scrollCards', { static: true }) scrollCardsRef!: ElementRef<HTMLElement>;

  scrollLeft(): void {
    const container = this.scrollCardsRef.nativeElement;
    const card = container.querySelector('.card') as HTMLElement;

    if (card) {
      const scrollAmount = card.offsetWidth + this.getCardGap();
      const nextScrollPosition = container.scrollLeft - scrollAmount;

      container.scrollTo({
        left: Math.max(nextScrollPosition, 0),
        behavior: 'smooth'
      });
    }
  }


  scrollRight(): void {
    const container = this.scrollCardsRef.nativeElement;
    const card = container.querySelector('.card') as HTMLElement;

    if (card) {
      const scrollAmount = card.offsetWidth + this.getCardGap();
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      const nextScrollPosition = container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: Math.min(nextScrollPosition, maxScrollLeft),
        behavior: 'smooth'
      });
    }
  }


  private getCardGap(): number {
    const card = this.scrollCardsRef.nativeElement.querySelector('.card') as HTMLElement;

    if (card) {
      const style = getComputedStyle(card);
      const marginRight = parseFloat(style.marginRight || '0');
      const marginLeft = parseFloat(style.marginLeft || '0');
      return marginLeft + marginRight;
    }

    return 0;
  }
}

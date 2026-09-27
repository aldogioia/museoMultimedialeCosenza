import { Component, Input } from '@angular/core';
import { ArrowRight02Icon } from '@hugeicons/core-free-icons';
import { ContentEntry } from '../../../model/content-entry';

@Component({
  selector: 'app-content-preview-card',
  standalone: false,
  templateUrl: './content-preview-card.html',
  styleUrl: './content-preview-card.css'
})
export class ContentPreviewCard {
  @Input({ required: true }) item!: ContentEntry;
  protected readonly ArrowRight02Icon = ArrowRight02Icon;
}

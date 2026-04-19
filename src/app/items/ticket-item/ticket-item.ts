import { Component, Input } from '@angular/core';
import { Exhibition } from '../../../model/exhibition';
import {
  Alert01Icon, Calendar03Icon, CallIcon,
  Link01Icon, MailIcon,
  Time02Icon, WhatsappFreeIcons
} from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-ticket-item',
  standalone: false,
  templateUrl: './ticket-item.html',
  styleUrl: './ticket-item.css',
})
export class TicketItem {
  // Sostituito Ticket con Exhibition
  @Input({required: true}) exhibition!: Exhibition;

  protected readonly Link01Icon = Link01Icon;
  protected readonly Time02Icon = Time02Icon;
  protected readonly Alert01Icon = Alert01Icon;
  protected readonly Calendar03Icon = Calendar03Icon;
  protected readonly CallIcon = CallIcon;
  protected readonly MailIcon = MailIcon;
  protected readonly WhatsappFreeIcons = WhatsappFreeIcons;
}

import {Component, Input} from '@angular/core';
import {Ticket} from '../../../model/ticket';
import {
  Alert01Icon, Calendar03Icon,
  Link01Icon,
  Time02Icon
} from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-ticket-item',
  standalone: false,
  templateUrl: './ticket-item.html',
  styleUrl: './ticket-item.css',
})
export class TicketItem {
  @Input({required: true}) ticket!: Ticket;
  protected readonly Link01Icon = Link01Icon;
  protected readonly Time02Icon = Time02Icon;
  protected readonly Alert01Icon = Alert01Icon;
  protected readonly Calendar03Icon = Calendar03Icon;
}

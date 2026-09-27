import {Component} from '@angular/core';
import {WhatsappFreeIcons} from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly WhatsappFreeIcons = WhatsappFreeIcons;
}

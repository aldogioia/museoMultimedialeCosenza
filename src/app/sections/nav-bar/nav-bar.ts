import { Component } from '@angular/core';
import {Cancel01Icon, Menu04Icon} from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  isOpen: boolean = false;
  protected readonly Menu04Icon = Menu04Icon;
  protected readonly Cancel01Icon = Cancel01Icon;
}

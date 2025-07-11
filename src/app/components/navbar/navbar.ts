import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  host: {"class": "nav"}
})
export class Navbar {
  open: boolean = false;
}

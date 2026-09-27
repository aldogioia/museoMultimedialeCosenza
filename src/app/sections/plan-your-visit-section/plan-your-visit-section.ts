import { Component } from '@angular/core';
import {Bus01Icon, Car05Icon, Location09Icon, Time02Icon} from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-plan-your-visit-section',
  standalone: false,
  templateUrl: './plan-your-visit-section.html',
  styleUrl: './plan-your-visit-section.css',
})
export class PlanYourVisitSection {
  readonly openingHours = [
    { day: 'Lunedì — Sabato · Mattina', hours: '09:00 — 13:00', note: '', order: 1 },
    { day: 'Lunedì — Sabato · Pomeriggio', hours: '15:00 — 20:00', note: '', order: 2 },
    { day: 'Domenica · Mattina', hours: '10:00 — 13:00', note: '', order: 3 },
    { day: 'Domenica · Pomeriggio', hours: '16:00 — 20:00', note: '', order: 4 }
  ];

  protected readonly Location09Icon = Location09Icon;
  protected readonly Bus01Icon = Bus01Icon;
  protected readonly Car05Icon = Car05Icon;
  protected readonly Time02Icon = Time02Icon;
}

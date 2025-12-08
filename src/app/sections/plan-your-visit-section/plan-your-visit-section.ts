import { Component } from '@angular/core';
import {Bus01Icon, Car05Icon, Location09Icon, Time02Icon} from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-plan-your-visit-section',
  standalone: false,
  templateUrl: './plan-your-visit-section.html',
  styleUrl: './plan-your-visit-section.css',
})
export class PlanYourVisitSection {

  protected readonly Location09Icon = Location09Icon;
  protected readonly Bus01Icon = Bus01Icon;
  protected readonly Car05Icon = Car05Icon;
  protected readonly Time02Icon = Time02Icon;
}

import { Component } from '@angular/core';
import {
  BulbFreeIcons,
  EarthIcon,
  SparklesFreeIcons,
  UserMultipleIcon
} from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-values-section',
  standalone: false,
  templateUrl: './values-section.html',
  styleUrl: './values-section.css',
})
export class ValuesSection {

  protected readonly BulbFreeIcons = BulbFreeIcons;
  protected readonly SparklesFreeIcons = SparklesFreeIcons;
  protected readonly UserMultipleIcon = UserMultipleIcon;
  protected readonly EarthIcon = EarthIcon;
}

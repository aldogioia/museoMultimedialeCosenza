import { Component } from '@angular/core';
import {ArrowRight02Icon, Calendar01FreeIcons} from "@hugeicons/core-free-icons";

@Component({
  selector: 'app-exhibition-item',
  standalone: false,
  templateUrl: './exhibition-item.html',
  styleUrl: './exhibition-item.css',
})
export class ExhibitionItem {

    protected readonly Calendar01FreeIcons = Calendar01FreeIcons;
    protected readonly ArrowRight02Icon = ArrowRight02Icon;
}

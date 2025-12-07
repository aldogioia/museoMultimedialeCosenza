import { Component } from '@angular/core';
import {Book01Icon, Knowledge01Icon, SparklesIcon, UserMultipleIcon} from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-experience-section',
  standalone: false,
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.css',
})
export class ExperienceSection {

  protected readonly SparklesIcon = SparklesIcon;
  protected readonly Book01Icon = Book01Icon;
  protected readonly UserMultipleIcon = UserMultipleIcon;
  protected readonly Knowledge01Icon = Knowledge01Icon;
}

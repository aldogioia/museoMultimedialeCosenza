import { Component } from '@angular/core';
import {CallIcon, MailIcon} from '@hugeicons/core-free-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reservation-section',
  standalone: false,
  templateUrl: './reservation-section.html',
  styleUrl: './reservation-section.css',
})
export class ReservationSection {

  protected readonly MailIcon = MailIcon;
  protected readonly CallIcon = CallIcon;

  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    const now = new Date();

    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + now.getDate()).slice(-2);

    const todayString = `${year}-${month}-${day}`;

    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{7,15}$')]],
      date: [todayString, [Validators.required]],
      guests: ['', [Validators.required, Validators.pattern('^[1-9][0-9]?$')]],
      notes: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
    });
  }
}

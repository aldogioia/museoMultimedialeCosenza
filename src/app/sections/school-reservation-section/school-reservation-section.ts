import { Component } from '@angular/core';
import {CallIcon, MailIcon, Time02Icon, UserMultipleIcon} from '@hugeicons/core-free-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmailService} from '../../services/email.service';

@Component({
  selector: 'app-school-reservation-section',
  standalone: false,
  templateUrl: './school-reservation-section.html',
  styleUrl: './school-reservation-section.css',
})
export class SchoolReservationSection {
  protected readonly CallIcon = CallIcon;
  protected readonly MailIcon = MailIcon;
  protected readonly UserMultipleIcon = UserMultipleIcon;
  protected readonly Time02Icon = Time02Icon;

  form: FormGroup = new FormGroup({});
  isSending = false;
  submitMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService,
  ) {
    const now = new Date();

    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + now.getDate()).slice(-2);

    const todayString = `${year}-${month}-${day}`;

    this.form = this.formBuilder.group({
      schoolName: ['', [Validators.required, Validators.minLength(2)]],
      profName: ['', [Validators.required, Validators.minLength(2)]],
      profSurname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{7,15}$')]],
      date: [todayString, [Validators.required]],
      classes: ['', [Validators.required, Validators.pattern('^[1-9][0-9]?$')]],
      students: ['', [Validators.required, Validators.pattern('^[1-9][0-9]?$')]],
      notes: ['', [Validators.maxLength(500)]],
      hp: ['']
    });
  }

  get controls() {
    return this.form.controls;
  }

  isInvalid(controlName: string): boolean {
    const c = this.controls[controlName];
    return (c && c.invalid && (c.touched || c.dirty));
  }

  getError(controlName: string): string {
    const c = this.controls[controlName];
    if (!c || !c.errors) return '';

    if (c.errors['required']) return 'Campo obbligatorio.';
    if (c.errors['minlength']) return `Minimo ${c.errors['minlength'].requiredLength} caratteri.`;
    if (c.errors['maxlength']) return `Massimo ${c.errors['maxlength'].requiredLength} caratteri.`;
    if (c.errors['email']) return 'Inserisci una email valida.';
    if (c.errors['pattern']) {
      if (controlName === 'tel') return 'Inserisci un numero di telefono valido (solo numeri, opzionale +).';
      if (controlName === 'classes' || controlName === 'students') return 'Inserisci un numero valido (1-99).';
      return 'Formato non valido.';
    }
    return 'Campo non valido.';
  }

  async submit() {

    if (this.form.value.hp) {
      console.log('Honeypot triggered. Aborting.');
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.submitMessage = 'Compila i campi obbligatori.';
      return;
    }

    this.isSending = true;
    this.submitMessage = '';

    const payload: Record<string, unknown> = {
      school_name: this.form.value.schoolName,
      prof_name: this.form.value.profName,
      prof_surname: this.form.value.profSurname,
      email: this.form.value.email,
      tel: this.form.value.tel,
      date: this.form.value.date,
      classes: this.form.value.classes,
      students: this.form.value.students,
      notes: this.form.value.notes || '',
      sent_at: new Date().toLocaleString()
    };

    try {
      const res = await this.emailService.sendSchoolReservation(payload);
      console.log('EmailJS sent', res);
      this.submitMessage = 'Richiesta inviata con successo. Ti contatteremo presto.';
      this.form.reset();
      const now = new Date();
      const year = now.getFullYear();
      const month = ('0' + (now.getMonth() + 1)).slice(-2);
      const day = ('0' + now.getDate()).slice(-2);
      this.form.patchValue({ date: `${year}-${month}-${day}` });
    } catch (err) {
      console.error('EmailJS error', err);
      this.submitMessage = 'Errore durante l\'invio. Riprova più tardi.';
    } finally {
      this.isSending = false;
    }
  }
}

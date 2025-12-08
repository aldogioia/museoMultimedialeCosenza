import { Injectable } from '@angular/core';
import * as EmailJS from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private serviceId = environment.EMAILJS_SERVICE_ID;
  private templateSchoolId = environment.EMAILJS_TEMPLATE_SCHOOL_ID;
  private templateSpaceId = environment.EMAILJS_TEMPLATE_SPACE_ID;
  private publicKey = environment.EMAILJS_PUBLIC_KEY;

  constructor() {
    try {
      EmailJS.init(this.publicKey);
    } catch (e) {
      console.warn('EmailJS init', e);
    }
  }

  sendSchoolReservation(payload: Record<string, unknown>): Promise<any> {
    return EmailJS.send(this.serviceId, this.templateSchoolId, payload);
  }

  sendSpacesReservation(payload: Record<string, unknown>): Promise<any> {
    return EmailJS.send(this.serviceId, this.templateSpaceId, payload);
  }
}

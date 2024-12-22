import { Injectable } from '@angular/core';
import * as Twilio from 'twilio';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
 // private twilioClient = Twilio('your_twilio_sid', 'your_twilio_auth_token');

 /* sendMatchNotification(playerPhone: string, matchTime: string) {
    this.twilioClient.messages.create({
      body: `Votre match commence dans 10 minutes !`,
      from: 'your_twilio_phone_number',
      to: playerPhone
    });
  }*/
}

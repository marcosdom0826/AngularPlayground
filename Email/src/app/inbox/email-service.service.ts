import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from './email';

interface EmailSummary {
  id: string;
  subject: string;
  from: string;
}


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  rootUrl = 'https://api.angular-email.com';

  constructor(private httpClient: HttpClient) { }

  getEmails() {
    return this.httpClient.get<EmailSummary[]>(`${this.rootUrl}/emails`,
    );
  }
  getEmail(id: string) {
    return this.httpClient.get<Email>(`${this.rootUrl}/emails/${id}`);
  }
  sendEmail(email: Email) {
    return this.httpClient.post(`${this.rootUrl}/emails`, email);
  }
}

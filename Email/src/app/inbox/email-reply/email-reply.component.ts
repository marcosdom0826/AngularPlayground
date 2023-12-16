import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Email } from '../email';
import { AuthService } from '../../auth/auth.service';
import { EmailService } from '../email-service.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrl: './email-reply.component.sass'
})
export class EmailReplyComponent implements OnChanges {
  showModal = false;
  //@ts-ignore
  @Input() email: Email;
  constructor(private authService: AuthService, private emailService: EmailService) { }
  ngOnChanges(): void {
    const text = this.email.text.replace(/\n/gi, '\n> ');
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      text: `\n\n\n-------- ${this.email.from} wrote:\n>${text}`,
      subject: `RE: ${this.email.subject}`
    }
  }
  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}

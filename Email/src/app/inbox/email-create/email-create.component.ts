import { Component } from '@angular/core';
import { Email } from '../email';
import { AuthService } from '../../auth/auth.service';
import { EmailService } from '../email-service.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrl: './email-create.component.sass'
})
export class EmailCreateComponent {

  showModal = false;
  email: Email = {
    id: '',
    to: '',
    subject: '',
    html: '',
    text: '',
    from: `${this.authService.username}@angular-email.com`
  };
  constructor(private authService: AuthService, private emailService: EmailService) { }
  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }

}

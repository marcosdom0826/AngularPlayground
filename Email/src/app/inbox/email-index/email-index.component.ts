import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email-service.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrl: './email-index.component.sass'
})
export class EmailIndexComponent implements OnInit {
  emails: any[] = []
  constructor(private emailService: EmailService) {
  }
  ngOnInit() {
    this.emailService.getEmails().subscribe((emails) => {
      this.emails = emails;
    });
  }
}

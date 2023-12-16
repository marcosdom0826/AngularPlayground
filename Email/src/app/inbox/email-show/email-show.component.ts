import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email-service.service';
import { switchMap } from 'rxjs';
import { Email } from '../email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrl: './email-show.component.sass'
})
export class EmailShowComponent {
  email: Email;
  constructor(private route: ActivatedRoute) {
    this.email = this.route.snapshot.data.email;
  }
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.email = data.email;
    })
  }
}

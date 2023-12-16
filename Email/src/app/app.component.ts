import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  signedin$ = new BehaviorSubject<null | boolean>(null);
  constructor(private authService: AuthService, private router: Router) {
    this.signedin$ = authService.signedin$;
  }
  ngOnInit() {
    this.authService.checkAuth().subscribe((result) => {

    });

  }
}

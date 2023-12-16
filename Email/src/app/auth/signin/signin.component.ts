import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SigninCredentials } from './signin-credentials';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.sass'
})
export class SigninComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {

  }
  loginGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/[a-z0-9]+$/)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)])
  });
  get username() {
    return this.loginGroup.controls.username.value;
  }
  get password() {
    return this.loginGroup.controls.password.value;
  }
  onSubmit() {
    if (!this.loginGroup.valid) {
      return;
    }
    this.authService.signin(this.loginGroup.value as SigninCredentials).subscribe({
      next: (responce) => {
        this.router.navigateByUrl('/inbox');
      },
      error: ({ error }) => {
        if (error.username || error.password) {
          this.loginGroup.setErrors({ credentials: true });
        }
      }
    });
  }
  ngOnInit() {
    this.authService.checkAuth().subscribe((result) => {
      if (result) {
        this.router.navigateByUrl('/inbox');
      }
    });
  }
}

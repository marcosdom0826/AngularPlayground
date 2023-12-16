import { Router } from '@angular/router';
import { MatchPassword } from './../validators/match-password';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService } from '../auth.service';
import { SignupCredentials } from './signup-credentials';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.sass'
})
export class SignupComponent {

  constructor(private matchPassword: MatchPassword, private uniqueUsername: UniqueUsername, private authService: AuthService, private router: Router) {

  }
  signupGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/[a-z0-9]+$/)
    ], [this.uniqueUsername.validate]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)]),
    passwordConfirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ])
  }, { validators: [this.matchPassword.validate] });
  get username() {
    return this.signupGroup.controls.username.value;
  }
  get password() {
    return this.signupGroup.controls.password.value;
  }
  get passwordConfirmation() {
    return this.signupGroup.controls.passwordConfirmation.value;
  }
  onSubmit() {
    if (this.signupGroup.invalid) {
      return;
    }
    let formValues = this.signupGroup.value as SignupCredentials;
    this.authService.signup(formValues).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox');
      },
      error: (err) => {
        if (err.status === 0) {
          this.signupGroup.setErrors({ noConnection: true })
        }
        this.signupGroup.setErrors({ unknownError: true })
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

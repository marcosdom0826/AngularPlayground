import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent implements OnInit {

  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      // Validators.maxLength(5),
      // Validators.pattern("")
    ]),
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    // expiration: new DateFormControl('', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
    expiration: new FormControl('', [Validators.required]),
    securityCode: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.min(100), Validators.max(999)])
  });

  constructor() {
  }
  ngOnInit(): void {
  }
  onSubmit() {
    console.log("Form submitted");
  }
  onReset() {
    this.cardForm.reset();
  }
}

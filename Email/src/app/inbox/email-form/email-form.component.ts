import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Email } from '../email';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.sass'
})
export class EmailFormComponent implements OnInit {
  //@ts-ignore
  @Input() email: Email;
  @Output() emailSubmit = new EventEmitter();
  //@ts-ignore
  emailForm: FormGroup;

  constructor() { }
  ngOnInit() {
    const { subject, from, to, text } = this.email;
    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      from: new FormControl({ value: from, disabled: true }),
      text: new FormControl(text, [Validators.required]),
      subject: new FormControl(subject, [Validators.required])
    });
  }
  get to() {
    return this.emailForm.controls.to as FormControl;
  }
  get from() {
    return this.emailForm.controls.from as FormControl;
  }
  get text() {
    return this.emailForm.controls.text as FormControl;
  }
  get subject() {
    return this.emailForm.controls.subject as FormControl;
  }
  onSubmit() {
    if (this.emailForm.invalid) {
      return;
    }
    this.emailSubmit.emit(this.emailForm.getRawValue());
  }
}

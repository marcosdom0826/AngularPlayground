import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.sass'
})
export class InputComponent {
  showErrors(): any {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
  @Input() label = '';
  @Input() control = new FormControl('');
  @Input() inputType: string = "text";
  @Input() controlType = "input";
}

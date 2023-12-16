import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() maskTemplate: string = "";
  @Input() control: FormControl = new FormControl();
  @Input() label: string = "";
  formIsIncorrect() {
    return this.control.errors
      && this.control.touched
      && this.control.dirty;
  }

}

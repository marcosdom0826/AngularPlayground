import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    InputComponent,
    NotFoundComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    NotFoundComponent,
    ModalComponent
  ]
})
export class SharedModule { }

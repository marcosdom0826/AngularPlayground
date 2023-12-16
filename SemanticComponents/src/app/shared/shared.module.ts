import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingDividerComponent } from './heading-divider/heading-divider.component';



@NgModule({
  declarations: [
    HeadingDividerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeadingDividerComponent]
})
export class SharedModule { }

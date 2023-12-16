import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { ModalComponent } from './modal/modal.component';
import { AccordionComponent } from './accordion/accordion.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ModsHomeComponent,
    ModalComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class ModsModule { }

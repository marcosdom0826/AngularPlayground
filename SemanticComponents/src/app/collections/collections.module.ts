import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './table/table.component';
import { BiographyComponent } from './biography/biography.component';
import { CompanyComponent } from './company/company.component';
import { PartnersComponent } from './partners/partners.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TableComponent,
    BiographyComponent,
    CompanyComponent,
    PartnersComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class CollectionsModule { }

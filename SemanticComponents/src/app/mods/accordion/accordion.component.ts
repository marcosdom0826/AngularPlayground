import { Component, Input } from '@angular/core';
import { accordion } from '../mods-home/accordion-interface';
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',

})
export class AccordionComponent {

  @Input()
  data: accordion[] = [];
  openedItemIndex = -1;

  onClick(index: number) {
    if (this.openedItemIndex === index) {
      this.openedItemIndex = -1;
      return;
    }
    this.openedItemIndex = index
  }

}

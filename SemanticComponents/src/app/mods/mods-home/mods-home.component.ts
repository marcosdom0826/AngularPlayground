import { Component, Input } from '@angular/core';
import { accordion } from './accordion-interface';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {
  showModal = false;
  data: accordion[] = [
    {
      title: "Question 1?",
      content: "Answer 1"
    },
    {
      title: "Question 2?",
      content: "Answer 2"
    },
    {
      title: "Question 3?",
      content: "Answer 3"
    },
  ]
  toggleShowModal() {
    this.showModal = !this.showModal;
  }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrl: './link-list.component.css'
})
export class LinkListComponent {
  @Input() pages: any[] = [];
}

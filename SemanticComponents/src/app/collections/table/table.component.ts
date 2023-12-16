import { Component, Input } from '@angular/core';
import { TableHeader } from './table-header';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})



export class TableComponent {
  @Input() tableClasses: string = ""
  @Input() data: any[] = [];
  @Input() headers: TableHeader[] = [];
}

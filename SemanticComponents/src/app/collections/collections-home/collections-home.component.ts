import { Component } from '@angular/core';
import { TableHeader } from '../table/table-header';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css'
})
export class CollectionsHomeComponent {
  data: any[] = [
    { name: 'James', age: 24, job: 'Engineer' },
    { name: 'John', age: 32, job: 'Designer' },
    { name: 'Jack', age: 42, job: 'Manager' },
  ];
  headers: TableHeader[] = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ]
}

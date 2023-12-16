import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css'
})
export class ViewsHomeComponent {
  dataStatistics = [
    { value: 22, label: 'Label' },
    { value: 13, label: 'Another Label' },
    { value: 22432, label: 'Label Two' },
    { value: 123, label: 'Last Label' }
  ];
  dataListItem = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'Fancy couch'
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'Nice dresser'
    },
  ]

}

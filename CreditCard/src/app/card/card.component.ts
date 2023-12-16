import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() cardNumber: string | null = "";
  @Input() name: string | null = "";
  @Input() expiration: string | null = "";
}

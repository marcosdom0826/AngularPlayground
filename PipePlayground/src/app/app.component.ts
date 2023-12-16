import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from "./convert.pipe";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, ConvertPipe]
})
export class AppComponent {


  name:string = "";  
  date:string = "";
  miles: number | null = null;
  amount: number | null = null;
  onNameChange($event: Event) {
    let eventValue = ($event.target as HTMLDataElement).value;
    this.name = eventValue;
  }
  onDateChange($event: Event) {
    let eventValue = ($event.target as HTMLDataElement).value;
    this.date = eventValue;
  }
  onAmountChange(eventValue: string) {
    if (!isNaN(parseFloat(eventValue))){
      this.amount = parseFloat(eventValue);
    } 
  }
  onMilesChange(eventValue: string) {
    if (!isNaN(parseFloat(eventValue))){
      this.miles = parseFloat(eventValue);
    }
  } 
}

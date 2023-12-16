import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  term: string = "";
  @Output() submitted = new EventEmitter<string>();
  onInput(event: any) {
    this.term = event.target.value;
  }
  onSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
  onClickChanger() {
    this.term = "CHANGED!";
  }

}

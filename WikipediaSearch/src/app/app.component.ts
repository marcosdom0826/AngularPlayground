import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { WikipideaPage } from './wikipidea-page';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages: WikipideaPage[] = [];
  constructor(private wikipedia: WikipediaService) {

  }
  onSubmit(term: string) {
    this.wikipedia.search(term).subscribe(pages => {
      this.pages = pages;
    });
  }


}

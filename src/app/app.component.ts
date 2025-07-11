import { Component } from '@angular/core';

@Component({
  selector: 'music-streaming-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchTerm: string = '';

  onSearch(term: string) {
    this.searchTerm = term;
  }
}

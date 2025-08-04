import { Component } from '@angular/core';
import { SearchService } from './services/search.service';

@Component({
  selector: 'music-streaming-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private searchService: SearchService) {}

  onSearch(term: string) {
    this.searchService.setSearchTerm(term);
  }
}

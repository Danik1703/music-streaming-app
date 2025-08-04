import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private searchService: SearchService) {}

  onSearchChange(term: string) {
    this.searchService.setSearchTerm(term); 
  }
}

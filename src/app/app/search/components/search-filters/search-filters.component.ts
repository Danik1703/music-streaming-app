import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss']
})
export class SearchFiltersComponent {
  @Output() searchChanged = new EventEmitter<string>();
  searchTerm: string = '';

  onSearchChange() {
    this.searchChanged.emit(this.searchTerm.trim());
  }

  clearSearch() {
    this.searchTerm = '';
    this.onSearchChange();
  }
}

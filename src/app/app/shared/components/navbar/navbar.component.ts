import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() searchChanged = new EventEmitter<string>();

  onSearchChange(term: string) {
    this.searchChanged.emit(term);
  }
}

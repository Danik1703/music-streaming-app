import { Component, Input } from '@angular/core';

interface Track {
  title: string;
  artist: string;
  coverUrl?: string;
  duration?: string;
  url?: string;
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  @Input() filteredTracks: Track[] = [];
  @Input() currentIndex: number = -1;

  onPlayTrack(index: number) {
    this.currentIndex = index;
  }
}

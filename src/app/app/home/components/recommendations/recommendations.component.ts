import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnChanges {
  @Input() searchTerm: string = '';
  currentIndex: number | null = null;

  allTracks = [
  {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    url: 'https://soundcloud.com/theweeknd/blinding-lights',
  },
  {
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    url: 'https://soundcloud.com/edsheeran/shape-of-you',
  },
  
  {
    title: 'Levitating',
    artist: 'Dua Lipa',
    url: 'https://soundcloud.com/dualipa/levitating',
  },
  {
    title: 'Bad Guy',
    artist: 'Billie Eilish',
    url: 'https://soundcloud.com/billieeilish/bad-guy',
  },
  {
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    url: 'https://soundcloud.com/sudeep-shakya-6/harry-styles-watermelon-sugar',
  },
  {
    title: 'Senorita',
    artist: 'Shawn Mendes & Camila Cabello',
    url: 'https://soundcloud.com/officialshawnmendes/shawn-mendes-camila-cabello',
  },
  {
    title: 'Someone You Loved',
    artist: 'Lewis Capaldi',
    url: 'https://soundcloud.com/lewiscapaldi/someone-you-loved-1',
  },
  {
    title: 'Circles',
    artist: 'Post Malone',
    url: 'https://soundcloud.com/postmalone/circles',
  },
  {
    title: 'Old Town Road',
    artist: 'Lil Nas X',
    url: 'https://soundcloud.com/secret-service-862007284/old-town-road',
  }
];


  filteredTracks = [...this.allTracks];
  currentPlayingIndex: number | null = null;

  ngOnChanges() {
    this.filteredTracks = this.allTracks.filter(track =>
      track.title.toLowerCase().includes(this.searchTerm) ||
      track.artist.toLowerCase().includes(this.searchTerm)
    );
  }

  onPlayTrack(index: number) {
    this.currentIndex = index;
  }
}

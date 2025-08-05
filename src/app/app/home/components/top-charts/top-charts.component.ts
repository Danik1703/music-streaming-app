import { Component } from '@angular/core';
import { PlatformHelper } from  '@natec/mef-dev-platform-connector';

interface Track {
  position: number;
  title: string;
  artist: string;
  coverUrl: string;
  duration: string;
}
@Component({
  selector: 'app-top-charts',
  templateUrl: './top-charts.component.html',
  styleUrls: ['./top-charts.component.scss']
})
export class TopChartsComponent {
  searchTerm: string = '';



tracks: Track[] = [
  {
    position: 1,
    title: 'Bad Habits',
    artist: 'Ed Sheeran',
    coverUrl: 'assets/bad-habits.jpg',
    duration: '3:51'
  },
  {
    position: 2,
    title: 'Stay',
    artist: 'The Kid LAROI & Justin Bieber',
    coverUrl: 'assets/stay.png',
    duration: '2:21'
  },
  {
    position: 3,
    title: 'Peaches',
    artist: 'Justin Bieber feat. Daniel Caesar & Giveon',
    coverUrl: 'assets/peaches.jpg',
    duration: '3:18'
  },
  {
    position: 4,
    title: 'Levitating',
    artist: 'Dua Lipa',
    coverUrl: 'assets/levitating.png',
    duration: '3:23'
  },
  {
    position: 5,
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    coverUrl: 'assets/save-your-tears.jpg',
    duration: '3:35'
  },
  {
    position: 6,
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    coverUrl: 'assets/good-4-u.jpg',
    duration: '2:58'
  },
  {
    position: 7,
    title: 'Montero (Call Me By Your Name)',
    artist: 'Lil Nas X',
    coverUrl: 'assets/montero.jpg',
    duration: '2:18'
  },
  {
    position: 8,
    title: 'Butter',
    artist: 'BTS',
    coverUrl: 'assets/butter.jpg',
    duration: '2:44'
  },
  {
    position: 9,
    title: 'Industry Baby',
    artist: 'Lil Nas X & Jack Harlow',
    coverUrl: 'assets/industry-baby.jpg',
    duration: '3:32'
  },
  {
    position: 10,
    title: 'Deja Vu',
    artist: 'Olivia Rodrigo',
    coverUrl: 'assets/deja-vu.jpg',
    duration: '3:35'
  }
];




  onSearchChanged(term: string) {
    this.searchTerm = term.toLowerCase();
  }

  get filteredTracks(): Track[] {
    if (!this.searchTerm) return this.tracks;
    return this.tracks.filter(track =>
      track.title.toLowerCase().includes(this.searchTerm) ||
      track.artist.toLowerCase().includes(this.searchTerm)
    );
  }
}

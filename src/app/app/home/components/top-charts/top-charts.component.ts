import { Component } from '@angular/core';

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
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Ed_Sheeran_-_Bad_Habits.png',
    duration: '3:51'
  },
  {
    position: 2,
    title: 'Stay',
    artist: 'The Kid LAROI & Justin Bieber',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3c/The_Kid_Laroi_and_Justin_Bieber_-_Stay.png',
    duration: '2:21'
  },
  {
    position: 3,
    title: 'Peaches',
    artist: 'Justin Bieber feat. Daniel Caesar & Giveon',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Justin_Bieber_-_Peaches.png',
    duration: '3:18'
  },
  {
    position: 4,
    title: 'Levitating',
    artist: 'Dua Lipa',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Dua_Lipa_-_Levitating.png',
    duration: '3:23'
  },
  {
    position: 5,
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_Save_Your_Tears.png',
    duration: '3:35'
  },
  {
    position: 6,
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Olivia_Rodrigo_-_Good_4_U.png',
    duration: '2:58'
  },
  {
    position: 7,
    title: 'Montero (Call Me By Your Name)',
    artist: 'Lil Nas X',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Lil_Nas_X_-_Montero.png',
    duration: '2:18'
  },
  {
    position: 8,
    title: 'Butter',
    artist: 'BTS',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9f/BTS_-_Butter.png',
    duration: '2:44'
  },
  {
    position: 9,
    title: 'Industry Baby',
    artist: 'Lil Nas X & Jack Harlow',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/4/49/Lil_Nas_X_Industry_Baby.png',
    duration: '3:32'
  },
  {
    position: 10,
    title: 'Deja Vu',
    artist: 'Olivia Rodrigo',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Deja_Vu.png',
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

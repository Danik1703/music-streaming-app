import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ListeningHistoryService, Track } from 'src/app/services/listening-history.service';
import { PlaylistService, Song } from 'src/app/services/playlist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnChanges {
  @Input() searchTerm: string = '';
  @Input() currentPlayingIndex: number | null = null;
  @Output() playTrack = new EventEmitter<number>();

  allTracks: Track[] = [
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', audioUrl: 'https://soundcloud.com/theweeknd/blinding-lights' },
    { id: 2, title: 'Shape of You', artist: 'Ed Sheeran', audioUrl: 'https://soundcloud.com/edsheeran/shape-of-you' },
    { id: 3, title: 'Levitating', artist: 'Dua Lipa', audioUrl: 'https://soundcloud.com/dualipa/levitating' },
    { id: 4, title: 'Bad Guy', artist: 'Billie Eilish', audioUrl: 'https://soundcloud.com/billieeilish/bad-guy' },
    { id: 5, title: 'Watermelon Sugar', artist: 'Harry Styles', audioUrl: 'https://soundcloud.com/sudeep-shakya-6/harry-styles-watermelon-sugar' },
    { id: 6, title: 'Senorita', artist: 'Shawn Mendes & Camila Cabello', audioUrl: 'https://soundcloud.com/officialshawnmendes/shawn-mendes-camila-cabello' },
    { id: 7, title: 'Someone You Loved', artist: 'Lewis Capaldi', audioUrl: 'https://soundcloud.com/lewiscapaldi/someone-you-loved-1' },
    { id: 8, title: 'Circles', artist: 'Post Malone', audioUrl: 'https://soundcloud.com/postmalone/circles' },
    { id: 9, title: 'Old Town Road', artist: 'Lil Nas X', audioUrl: 'https://soundcloud.com/secret-service-862007284/old-town-road' }
  ];

  filteredTracks = [...this.allTracks];

  constructor(
    private historyService: ListeningHistoryService,
    private playlistService: PlaylistService
  ) { }

  ngOnChanges() {
    const term = this.searchTerm.toLowerCase();
    this.filteredTracks = this.allTracks.filter(track =>
      track.title.toLowerCase().includes(term) ||
      track.artist.toLowerCase().includes(term)
    );
  }

  onPlayTrack(index: number) {
    const track = this.filteredTracks[index];
    this.playTrack.emit(index);
    this.historyService.addToHistory(track);
  }

  onAddToPlaylist(track: Track) {
    if (!track.audioUrl) {
      Swal.fire({
        icon: 'error',
        title: 'Помилка',
        text: 'Неможливо додати до плейлиста, оскільки відсутній URL аудіо',
      });
      return;
    }

    const playlistName = 'Мої улюблені';

    const song: Song = {
      id: track.id,
      title: track.title,
      artist: track.artist,
      audioUrl: track.audioUrl
    };

    this.playlistService.addToPlaylist(playlistName, song);

    Swal.fire({
      icon: 'success',
      title: 'Успіх',
      text: `Пісня "${track.title}" додана до плейлиста "${playlistName}"`,
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false
    });
  }
}

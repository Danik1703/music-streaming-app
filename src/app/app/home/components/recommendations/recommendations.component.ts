import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ListeningHistoryService, Track } from 'src/app/services/listening-history.service';
import { PlaylistService } from 'src/app/services/playlist.service';
import { Song } from 'src/app/services/models/playlist.model';

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

  allTracks: Track[] = [];
  filteredTracks: Track[] = [];

  constructor(
    private historyService: ListeningHistoryService,
    private playlistService: PlaylistService
  ) {
    const rawTracks: Track[] = [
      { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', youtubeVideoId: '4NRXx6U8ABQ' },
      { id: 2, title: 'Shape of You', artist: 'Ed Sheeran', youtubeVideoId: 'JGwWNGJdvx8' },
      { id: 3, title: 'Levitating', artist: 'Dua Lipa', youtubeVideoId: 'TUVcZfQe-Kw' },
      { id: 4, title: 'Bad Guy', artist: 'Billie Eilish', youtubeVideoId: 'DyDfgMOUjCI' },
      { id: 5, title: 'Watermelon Sugar', artist: 'Harry Styles', youtubeVideoId: 'E07s5ZYygMg' },
      { id: 6, title: 'Senorita', artist: 'Shawn Mendes & Camila Cabello', youtubeVideoId: 'Pkh8UtuejGw' },
      { id: 7, title: 'Someone You Loved', artist: 'Lewis Capaldi', youtubeVideoId: 'zABLecsR5UE' },
      { id: 8, title: 'Circles', artist: 'Post Malone', youtubeVideoId: 'wXhTHyIgQ_U' },
      { id: 9, title: 'Old Town Road', artist: 'Lil Nas X', youtubeVideoId: 'r7qovpFAGrQ' }
    ];

    this.allTracks = rawTracks.map(track => ({
      ...track,
      coverUrl: track.youtubeVideoId
        ? this.historyService.getCoverUrlFromYouTube(track.youtubeVideoId)
        : undefined
    }));

    this.filteredTracks = [...this.allTracks];
  }

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
    if (!track.youtubeVideoId) {
      Swal.fire({
        icon: 'error',
        title: 'Помилка',
        text: 'Неможливо додати до плейлиста, оскільки відсутній YouTube ID',
      });
      return;
    }

    const playlistName = 'Мої улюблені';

    const song: Song = {
      id: track.id,
      title: track.title,
      artist: track.artist,
      youtubeVideoId: track.youtubeVideoId
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

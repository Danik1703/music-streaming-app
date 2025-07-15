import { Component, OnInit, OnDestroy } from '@angular/core';
import { Playlist } from 'src/app/services/models/playlist.model';
import { PlaylistService } from 'src/app/services/playlist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit, OnDestroy {
  playlists: Playlist[] = [];
  selectedPlaylist?: Playlist;
  private sub?: Subscription;

  constructor(private playlistService: PlaylistService) {}

  ngOnInit() {
    this.sub = this.playlistService.playlists$.subscribe(data => {
      this.playlists = data;
      this.selectedPlaylist = data.find(p => p.id === this.selectedPlaylist?.id);
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  selectPlaylist(playlist: Playlist) {
    this.selectedPlaylist = playlist;
  }

  deletePlaylist(id: number) {
    if (confirm('Видалити плейлист?')) {
      this.playlistService.delete(id);
      if (this.selectedPlaylist?.id === id) {
        this.selectedPlaylist = undefined;
      }
    }
  }

  deleteSongFromPlaylist(songId: number) {
    if (!this.selectedPlaylist) return;
    this.selectedPlaylist.songs = this.selectedPlaylist.songs.filter(s => s.id !== songId);
    this.playlistService.update(this.selectedPlaylist);
  }
}
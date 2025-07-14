import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Playlist } from 'src/app/services/models/playlist.model';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.scss']
})
export class PlaylistDetailComponent {
  @Input() playlist!: Playlist;
  @Output() removeSong = new EventEmitter<number>(); 

  onRemoveSong(songId: number) {
    this.removeSong.emit(songId);
  }
}

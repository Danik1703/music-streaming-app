import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Playlist } from 'src/app/services/models/playlist.model';

@Component({
  selector: 'app-playlist-editor',
  templateUrl: './playlist-editor.component.html',
  styleUrls: ['./playlist-editor.component.scss']
})
export class PlaylistEditorComponent {
  @Input() playlist!: Playlist;
  @Output() save = new EventEmitter<Playlist>();

  editedPlaylist!: Playlist;

  ngOnChanges() {
    this.editedPlaylist = { ...this.playlist, songs: [...(this.playlist.songs || [])] };
  }

  savePlaylist() {
    this.save.emit(this.editedPlaylist);
  }
}

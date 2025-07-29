import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Playlist } from 'src/app/services/models/playlist.model';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss']
})
export class PlaylistCardComponent {
  @Input() playlist!: Playlist;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}

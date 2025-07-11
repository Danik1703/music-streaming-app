import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss']
})
export class PlaylistCardComponent {
  @Input() playlist: any; // { title: string, cover: string, tracksCount: number }
  @Output() selectPlaylist = new EventEmitter<any>();

  onSelect() {
    this.selectPlaylist.emit(this.playlist);
  }
}

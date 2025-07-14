import { Component } from '@angular/core';
import { Playlist } from 'src/app/services/models/playlist.model';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  playlists: Playlist[] = [
    { id: 1, name: 'Мої улюблені', songs: [] },
    { id: 2, name: 'Релакс', songs: [] },
    { id: 3, name: 'Пробудження', songs: [] }
  ];
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';
import { Playlist } from 'src/app/services/models/playlist.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  playlists: Playlist[] = [];
  private sub?: Subscription;

  constructor(private playlistService: PlaylistService) {}

  ngOnInit() {
    this.sub = this.playlistService.playlists$.subscribe(data => {
      this.playlists = data.length ? data : [
        { id: 1, name: 'Мої улюблені', songs: [] },
        { id: 2, name: 'Релакс', songs: [] },
        { id: 3, name: 'Пробудження', songs: [] }
      ];
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}

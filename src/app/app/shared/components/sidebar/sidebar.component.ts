import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlaylistService, Playlist } from 'src/app/services/playlist.service';
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
      this.playlists = data;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}

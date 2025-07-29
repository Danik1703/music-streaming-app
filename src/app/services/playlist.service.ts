import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Playlist, Song } from './models/playlist.model';

const STORAGE_KEY = 'playlists';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private playlists: Playlist[] = [];
  private playlistsSubject = new BehaviorSubject<Playlist[]>([]);
  playlists$ = this.playlistsSubject.asObservable();

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      this.playlists = JSON.parse(stored);
    } else {
      this.playlists = [];
    }
    this.emitChanges();
  }

  private saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.playlists));
    this.emitChanges();
  }

  private emitChanges() {
    this.playlistsSubject.next([...this.playlists]);
  }

  getAll() {
    return this.playlists$;
  }

  addToPlaylist(playlistName: string, song: Song) {
    let playlist = this.playlists.find(pl => pl.name === playlistName);

    if (!playlist) {
      playlist = {
        id: Date.now(),
        name: playlistName,
        songs: []
      };
      this.playlists.push(playlist);
    }

    if (!playlist.songs.find(s => s.id === song.id)) {
      playlist.songs.push(song);
      this.saveToStorage();
    }
  }

  update(updatedPlaylist: Playlist) {
    const index = this.playlists.findIndex(pl => pl.id === updatedPlaylist.id);
    if (index !== -1) {
      this.playlists[index] = updatedPlaylist;
      this.saveToStorage();
    }
  }

  delete(id: number) {
    this.playlists = this.playlists.filter(pl => pl.id !== id);
    this.saveToStorage();
  }
}

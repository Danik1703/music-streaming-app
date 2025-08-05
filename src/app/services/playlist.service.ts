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

  private defaultPlaylists: Playlist[] = [
    { id: 1, name: 'Мої улюблені', songs: [] },
    { id: 2, name: 'Релакс', songs: [] },
    { id: 3, name: 'Пробудження', songs: [] }
  ];

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: Playlist[] = JSON.parse(stored);

        if (!Array.isArray(parsed) || parsed.length === 0) {
          this.playlists = [...this.defaultPlaylists];
          this.saveToStorage();
        } else {
          this.playlists = parsed;
        }
      } else {
        this.playlists = [...this.defaultPlaylists];
        this.saveToStorage();
      }
    } catch {
      this.playlists = [...this.defaultPlaylists];
      this.saveToStorage();
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

    const exists = playlist.songs.some(s => s.id === song.id);

    if (!exists) {
      playlist.songs = [...playlist.songs, song];
      this.playlists = this.playlists.map(pl =>
        pl.id === playlist!.id ? { ...playlist! } : pl
      );
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

  resetToDefault() {
    this.playlists = [...this.defaultPlaylists];
    this.saveToStorage();
  }
}

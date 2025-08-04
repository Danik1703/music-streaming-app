import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Song {
  id: number;
  title: string;
  artist: string;
  audioUrl: string;
  duration?: number;
}

export interface Playlist {
  id: number;
  name: string;
  description?: string;
  songs: Song[];
  cover?: string;
}

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
  console.log(`Добавляем в плейлист: ${playlistName}`, song);

  let playlist = this.playlists.find(pl => pl.name === playlistName);

  if (!playlist) {
    playlist = {
      id: Date.now(),
      name: playlistName,
      songs: []
    };
    this.playlists.push(playlist);
    console.log('Создан новый плейлист:', playlist);
  }

  const exists = playlist.songs.some(s => s.id === song.id);

  if (!exists) {
    playlist.songs = [...playlist.songs, song]; // важно: создаём новый массив
    this.playlists = this.playlists.map(pl => pl.id === playlist!.id ? { ...playlist! } : pl);
    this.saveToStorage();
    console.log('Песня добавлена:', song);
  } else {
    console.log('Песня уже есть в плейлисте');
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

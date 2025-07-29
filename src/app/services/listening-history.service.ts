import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { PlaylistService } from 'src/app/services/playlist.service';


export interface Track {
  id: number;
  title: string;
  artist: string;
  youtubeVideoId?: string;
  audioUrl?: string;
  album?: string;
  coverUrl?: string;
}


const STORAGE_KEY = 'listening_history';

@Injectable({
  providedIn: 'root'
})
export class ListeningHistoryService {
  private history: Track[] = [];

  constructor(private http: HttpClient) {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      this.history = JSON.parse(data);
    }
  }

  private saveToStorage(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.history));
  }

  getHistory(): Track[] {
    return this.history;
  }


getCoverUrlFromYouTube(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

addToHistory(track: Track): void {
  const last = this.history[this.history.length - 1];
  if (last && last.id === track.id) return;

  if (!track.coverUrl && track.youtubeVideoId) {
    track.coverUrl = this.getCoverUrlFromYouTube(track.youtubeVideoId);
  }

  this.history.push(track);
  this.saveToStorage();
}

  clearHistory(): void {
    this.history = [];
    this.saveToStorage();
  }
}

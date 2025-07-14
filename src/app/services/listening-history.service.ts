import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

export interface Track {
  id: number;
  title: string;
  artist: string;
  album?: string;
  coverUrl?: string;
  audioUrl?: string;
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


  getCoverUrlFromSoundCloud(trackUrl: string): Observable<string | null> {
    const apiUrl = `https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(trackUrl)}`;

    return this.http.get<{ thumbnail_url: string }>(apiUrl).pipe(
      map(response => {
        if (response.thumbnail_url) {
          return response.thumbnail_url.replace('large', 't500x500');
        }
        return null;
      }),
      catchError(() => of(null))
    );
  }

  addToHistory(track: Track): void {
    const last = this.history[this.history.length - 1];
    if (last && last.id === track.id) {
      return;
    }

    if (!track.coverUrl && track.audioUrl) {
      this.getCoverUrlFromSoundCloud(track.audioUrl).subscribe(coverUrl => {
        track.coverUrl = coverUrl ?? 'https://via.placeholder.com/320x180?text=No+Cover';
        this.history.push(track);
        this.saveToStorage();
      });
    } else {
      this.history.push(track);
      this.saveToStorage();
    }
  }

  clearHistory(): void {
    this.history = [];
    this.saveToStorage();
  }
}

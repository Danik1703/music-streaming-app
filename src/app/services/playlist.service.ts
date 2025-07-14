import { Injectable } from '@angular/core';
import { Playlist, Song } from './models/playlist.model';
import { Track } from './listening-history.service';
import { BehaviorSubject } from 'rxjs';

const STORAGE_KEY = 'playlists';

@Injectable({ providedIn: 'root' })
export class PlaylistService {
    private playlists: Playlist[] = [];
    private playlistsSubject = new BehaviorSubject<Playlist[]>([]); 
    playlists$ = this.playlistsSubject.asObservable(); 

    constructor() {
        this.load();
    }

    private load() {
        const data = localStorage.getItem(STORAGE_KEY);
        this.playlists = data ? JSON.parse(data) : [];
        this.playlistsSubject.next(this.playlists); 
    }

    private save() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.playlists));
        this.playlistsSubject.next(this.playlists); 
    }

    getAll(): Playlist[] {
        return this.playlists;
    }

    getById(id: number): Playlist | undefined {
        return this.playlists.find(pl => pl.id === id);
    }

    add(playlist: Playlist) {
        playlist.id = this.playlists.length ? Math.max(...this.playlists.map(p => p.id)) + 1 : 1;
        this.playlists.push(playlist);
        this.save();
    }

    update(playlist: Playlist) {
        const index = this.playlists.findIndex(p => p.id === playlist.id);
        if (index !== -1) {
            this.playlists[index] = playlist;
            this.save();
        }
    }

    delete(id: number) {
        this.playlists = this.playlists.filter(p => p.id !== id);
        this.save();
    }

    addToPlaylist(playlistName: string, track: Track) {
        const song: Song = {
            id: track.id,
            title: track.title ?? 'Unknown Title',
            artist: track.artist ?? 'Unknown Artist',
            audioUrl: track.audioUrl ?? '',
            duration: (track as any).duration ?? 0
        };

        let playlist = this.playlists.find(pl => pl.name === playlistName);

        if (!playlist) {
            playlist = {
                id: this.playlists.length ? Math.max(...this.playlists.map(p => p.id)) + 1 : 1,
                name: playlistName,
                description: '',
                songs: [song]
            };
            this.playlists.push(playlist);
        } else {
            if (!playlist.songs.some(s => s.id === song.id)) {
                playlist.songs.push(song);
            }
        }

        this.save();
    }
}

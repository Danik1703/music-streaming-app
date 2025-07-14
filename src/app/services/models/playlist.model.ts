export interface Playlist {
  id: number;
  name: string;
  description?: string;
  songs: Song[];
}

export interface Song {
  id: number;
  title: string;
  artist: string;
  audioUrl: string;
  duration: number; 
}

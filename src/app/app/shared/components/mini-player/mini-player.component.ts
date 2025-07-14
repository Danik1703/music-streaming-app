import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mini-player',
  templateUrl: './mini-player.component.html',
  styleUrls: ['./mini-player.component.scss']
})
export class MiniPlayerComponent implements OnChanges {
  @Input() tracks: Array<{ title: string; artist: string; url: string }> = [];
  @Input() currentIndex = 0;
  @Output() trackChanged = new EventEmitter<number>();

  isPlaying = false;
  currentTime = 0;
  duration = 0;
  volume = 1;

  private audio = new Audio();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentIndex'] && this.tracks.length > 0) {
      this.loadTrack(this.currentIndex);
    }
  }

  loadTrack(index: number) {
    this.isPlaying = false;
    this.currentTime = 0;
    this.duration = 0;

    this.audio.src = this.tracks[index].url;
    this.audio.load();

    this.audio.onloadedmetadata = () => {
      this.duration = this.audio.duration;
    };

    this.audio.ontimeupdate = () => {
      this.currentTime = this.audio.currentTime;
    };

    this.audio.onended = () => {
      this.nextTrack();
    };

    if (this.isPlaying) {
      this.audio.play();
    }
  }

  togglePlayPause() {
    if (!this.isPlaying) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
    this.isPlaying = !this.isPlaying;
  }

  onSeek(time: number) {
    this.audio.currentTime = time;
  }

  changeVolume(vol: number) {
    this.volume = vol;
    this.audio.volume = vol;
  }

  nextTrack() {
    if (this.currentIndex < this.tracks.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; 
    }
    this.trackChanged.emit(this.currentIndex);
    this.loadTrack(this.currentIndex);
    if (this.isPlaying) {
      this.audio.play();
    }
  }

  prevTrack() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.tracks.length - 1;
    }
    this.trackChanged.emit(this.currentIndex);
    this.loadTrack(this.currentIndex);
    if (this.isPlaying) {
      this.audio.play();
    }
  }
}

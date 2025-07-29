import {
  Component,
  Input,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import { Track } from 'src/app/services/listening-history.service';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss']
})
export class TrackCardComponent implements AfterViewInit, OnDestroy {
  @Input() track!: Track;
  @Output() playTrack = new EventEmitter<void>();
  @Output() addToPlaylist = new EventEmitter<Track>();

  @ViewChild('playerContainer', { static: false }) playerContainer!: ElementRef;

  player: any;
  isPlaying = false;
  volume = 50;
  currentTime = 0;
  duration = 0;
  interval: any;

  async ngAfterViewInit() {
    await this.loadYouTubeApi();
    this.initPlayer();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
    if (this.player) {
      this.player.destroy();
    }
  }

  loadYouTubeApi(): Promise<void> {
    return new Promise((resolve) => {
      if (window.YT && window.YT.Player) {
        resolve();
      } else {
        window.onYouTubeIframeAPIReady = resolve;
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(script);
      }
    });
  }

  initPlayer() {
    this.player = new window.YT.Player(this.playerContainer.nativeElement, {
      height: '0',
      width: '0',
      videoId: this.track.youtubeVideoId,
      playerVars: { autoplay: 0, controls: 0, enablejsapi: 1 },
      events: {
        onReady: () => {
          this.player.setVolume(this.volume);
          this.duration = this.player.getDuration();
          this.trackProgress();
        },
        onStateChange: (e: any) => {
          const YT = window.YT;
          if (e.data === YT.PlayerState.PLAYING) {
            this.isPlaying = true;
          } else {
            this.isPlaying = false;
          }
        }
      }
    });
  }

  togglePlay() {
    if (!this.player) return;
    const YT = window.YT;
    const state = this.player.getPlayerState();
    if (state === YT.PlayerState.PLAYING) {
      this.player.pauseVideo();
    } else {
      this.player.playVideo();
      this.playTrack.emit();
    }
  }

  changeVolume(event: any) {
    const value = +event.target.value;
    this.volume = value;
    this.player.setVolume(value);
  }

  seek(event: any) {
    const value = +event.target.value;
    this.player.seekTo(value, true);
    this.currentTime = value;
  }

  trackProgress() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if (this.player && this.isPlaying) {
        this.currentTime = this.player.getCurrentTime();
        this.duration = this.player.getDuration();
      }
    }, 500);
  }

  formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' + s : s}`;
  }
}

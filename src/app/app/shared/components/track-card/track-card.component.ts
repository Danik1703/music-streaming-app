import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Track } from 'src/app/services/listening-history.service'; // Импорт интерфейса Track

declare var SC: any;

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss']
})
export class TrackCardComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() track!: Track;  // Изменили тип на Track
  @Input() index!: number;
  @Input() isActive = false;
  @Output() playTrack = new EventEmitter<number>();

  @ViewChild('iframeRef', { static: false }) iframeRef!: ElementRef<HTMLIFrameElement>;

  safeUrl!: SafeResourceUrl;
  widget: any;
  isPlaying = false;
  volume = 50;
  currentTime = 0;
  duration = 0;
  intervalId: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.prepareUrl();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['track']) {
      this.prepareUrl();
    }

    if (changes['isActive']) {
      if (!this.isActive && this.widget) {
        this.widget.pause();
      }
    }
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.iframeRef?.nativeElement) {
        this.widget = SC.Widget(this.iframeRef.nativeElement);

        this.widget.bind(SC.Widget.Events.READY, () => {
          this.widget.setVolume(this.volume);
          this.widget.getDuration((d: number) => this.duration = d / 1000);
          this.startProgressUpdater();
        });

        this.widget.bind(SC.Widget.Events.PLAY, () => {
          this.isPlaying = true;
          this.playTrack.emit(this.index);
        });

        this.widget.bind(SC.Widget.Events.PAUSE, () => {
          this.isPlaying = false;
        });

        this.widget.bind(SC.Widget.Events.FINISH, () => {
          this.isPlaying = false;
        });
      }
    }, 300);
  }

prepareUrl() {
  const url = this.track.audioUrl ?? ''; 
  const embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&auto_play=false`;
  this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
}

  togglePlay() {
    if (!this.widget) return;

    this.widget.isPaused((paused: boolean) => {
      if (paused) {
        this.widget.play();
      } else {
        this.widget.pause();
      }
    });
  }

  changeVolume(event: Event) {
    const input = event.target as HTMLInputElement;
    this.volume = Number(input.value);
    if (this.widget) {
      this.widget.setVolume(this.volume);
    }
  }

  onSeek(event: Event) {
    const input = event.target as HTMLInputElement;
    const seekTime = Number(input.value);
    if (this.widget) {
      this.widget.seekTo(seekTime * 1000);
      this.currentTime = seekTime;
    }
  }

  startProgressUpdater() {
    if (this.intervalId) clearInterval(this.intervalId);

    this.intervalId = setInterval(() => {
      if (this.widget && this.isPlaying) {
        this.widget.getPosition((pos: number) => {
          this.currentTime = pos / 1000;
        });
      }
    }, 500);
  }

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  }
}

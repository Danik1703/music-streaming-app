import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-track-progress',
  templateUrl: './track-progress.component.html',
  styleUrls: ['./track-progress.component.scss']
})
export class TrackProgressComponent {
  @Input() currentTime = 0; 
  @Input() duration = 0;    
  @Output() seek = new EventEmitter<number>(); 

  onSeek(event: any) {
    const newTime = +event.target.value;
    this.seek.emit(newTime);
  }

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }
}

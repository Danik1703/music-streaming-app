import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-audio-controls',
  templateUrl: './audio-controls.component.html',
  styleUrls: ['./audio-controls.component.scss']
})
export class AudioControlsComponent {
  @Input() isPlaying = false;
  @Input() volume = 1; // 0..1
  @Output() playPauseToggle = new EventEmitter<void>();
  @Output() volumeChange = new EventEmitter<number>();

  togglePlayPause() {
    this.playPauseToggle.emit();
  }

  onVolumeChange(event: any) {
    const vol = +event.target.value;
    this.volumeChange.emit(vol);
  }
}

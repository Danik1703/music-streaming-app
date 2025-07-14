import { Component, OnInit } from '@angular/core';
import { ListeningHistoryService, Track } from 'src/app/services/listening-history.service';

@Component({
  selector: 'app-listening-history',
  templateUrl: './listening-history.component.html',
  styleUrls: ['./listening-history.component.scss']
})
export class ListeningHistoryComponent implements OnInit {
  listeningHistory: Track[] = [];
  currentPlayingIndex: number | null = null;

  constructor(private historyService: ListeningHistoryService) {}

  ngOnInit(): void {
    this.listeningHistory = this.historyService.getHistory();
  }

  onPlayTrack(index: number) {
    this.currentPlayingIndex = index;
  }
}

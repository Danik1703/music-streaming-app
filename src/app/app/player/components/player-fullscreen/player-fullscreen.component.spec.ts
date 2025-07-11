import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerFullscreenComponent } from './player-fullscreen.component';

describe('PlayerFullscreenComponent', () => {
  let component: PlayerFullscreenComponent;
  let fixture: ComponentFixture<PlayerFullscreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerFullscreenComponent]
    });
    fixture = TestBed.createComponent(PlayerFullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

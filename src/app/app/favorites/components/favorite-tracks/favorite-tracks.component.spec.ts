import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteTracksComponent } from './favorite-tracks.component';

describe('FavoriteTracksComponent', () => {
  let component: FavoriteTracksComponent;
  let fixture: ComponentFixture<FavoriteTracksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteTracksComponent]
    });
    fixture = TestBed.createComponent(FavoriteTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

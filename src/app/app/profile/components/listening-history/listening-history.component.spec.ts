import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningHistoryComponent } from './listening-history.component';

describe('ListeningHistoryComponent', () => {
  let component: ListeningHistoryComponent;
  let fixture: ComponentFixture<ListeningHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeningHistoryComponent]
    });
    fixture = TestBed.createComponent(ListeningHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

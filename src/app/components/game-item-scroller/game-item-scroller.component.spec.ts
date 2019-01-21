import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameItemScrollerComponent } from './game-item-scroller.component';

describe('GameItemScrollerComponent', () => {
  let component: GameItemScrollerComponent;
  let fixture: ComponentFixture<GameItemScrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameItemScrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameItemScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

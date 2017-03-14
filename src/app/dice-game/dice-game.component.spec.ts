import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceGameComponent } from './dice-game.component';

describe('DiceGameComponent', () => {
  let component: DiceGameComponent;
  let fixture: ComponentFixture<DiceGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

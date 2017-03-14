import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhallusLengthGameComponent } from './phallus-length-game.component';

describe('PhallusLengthGameComponent', () => {
  let component: PhallusLengthGameComponent;
  let fixture: ComponentFixture<PhallusLengthGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhallusLengthGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhallusLengthGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitFormComponent } from './init-form.component';

describe('InitFormComponent', () => {
  let component: InitFormComponent;
  let fixture: ComponentFixture<InitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

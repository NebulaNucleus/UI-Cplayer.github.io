import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatOpenerComponent } from './stat-opener.component';

describe('StatOpenerComponent', () => {
  let component: StatOpenerComponent;
  let fixture: ComponentFixture<StatOpenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatOpenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatOpenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

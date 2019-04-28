import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineconsultantComponent } from './timelineconsultant.component';

describe('TimelineconsultantComponent', () => {
  let component: TimelineconsultantComponent;
  let fixture: ComponentFixture<TimelineconsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineconsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineconsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

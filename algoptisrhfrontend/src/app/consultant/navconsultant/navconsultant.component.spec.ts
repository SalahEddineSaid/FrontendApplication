import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavconsultantComponent } from './navconsultant.component';

describe('NavconsultantComponent', () => {
  let component: NavconsultantComponent;
  let fixture: ComponentFixture<NavconsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavconsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavconsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

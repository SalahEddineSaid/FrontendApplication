import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FOOTERconsultantComponent } from './footerconsultant.component';

describe('FOOTERconsultantComponent', () => {
  let component: FOOTERconsultantComponent;
  let fixture: ComponentFixture<FOOTERconsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FOOTERconsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FOOTERconsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

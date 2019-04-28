import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubriqueConsultantComponent } from './rubrique-consultant.component';

describe('RubriqueConsultantComponent', () => {
  let component: RubriqueConsultantComponent;
  let fixture: ComponentFixture<RubriqueConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubriqueConsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubriqueConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

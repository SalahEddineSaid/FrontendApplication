import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionReponseConsultantComponent } from './question-reponse-consultant.component';

describe('QuestionReponseConsultantComponent', () => {
  let component: QuestionReponseConsultantComponent;
  let fixture: ComponentFixture<QuestionReponseConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionReponseConsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionReponseConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

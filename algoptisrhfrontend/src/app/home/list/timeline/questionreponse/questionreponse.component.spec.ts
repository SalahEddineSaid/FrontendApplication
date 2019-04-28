import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionreponseComponent } from './questionreponse.component';

describe('QuestionreponseComponent', () => {
  let component: QuestionreponseComponent;
  let fixture: ComponentFixture<QuestionreponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionreponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionreponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditerQuestionComponent } from './admin-editer-question.component';

describe('AdminEditerQuestionComponent', () => {
  let component: AdminEditerQuestionComponent;
  let fixture: ComponentFixture<AdminEditerQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditerQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditerQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

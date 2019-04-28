import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAjouterQuestionComponent } from './admin-ajouter-question.component';

describe('AdminAjouterQuestionComponent', () => {
  let component: AdminAjouterQuestionComponent;
  let fixture: ComponentFixture<AdminAjouterQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAjouterQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAjouterQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditerRubriqueComponent } from './admin-editer-rubrique.component';

describe('AdminEditerRubriqueComponent', () => {
  let component: AdminEditerRubriqueComponent;
  let fixture: ComponentFixture<AdminEditerRubriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditerRubriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditerRubriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

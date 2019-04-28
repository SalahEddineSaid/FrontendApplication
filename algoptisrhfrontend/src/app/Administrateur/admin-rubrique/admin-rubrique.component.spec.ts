import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRubriqueComponent } from './admin-rubrique.component';

describe('AdminRubriqueComponent', () => {
  let component: AdminRubriqueComponent;
  let fixture: ComponentFixture<AdminRubriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRubriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRubriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

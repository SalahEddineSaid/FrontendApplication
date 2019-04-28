import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAjouterRubriqueComponent } from './admin-ajouter-rubrique.component';

describe('AdminAjouterRubriqueComponent', () => {
  let component: AdminAjouterRubriqueComponent;
  let fixture: ComponentFixture<AdminAjouterRubriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAjouterRubriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAjouterRubriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

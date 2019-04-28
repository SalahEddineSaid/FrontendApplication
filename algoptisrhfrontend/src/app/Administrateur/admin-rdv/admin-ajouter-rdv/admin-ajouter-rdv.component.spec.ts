import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAjouterRdvComponent } from './admin-ajouter-rdv.component';

describe('AdminAjouterRdvComponent', () => {
  let component: AdminAjouterRdvComponent;
  let fixture: ComponentFixture<AdminAjouterRdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAjouterRdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAjouterRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

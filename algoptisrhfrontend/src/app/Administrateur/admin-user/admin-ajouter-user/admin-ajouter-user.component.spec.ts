import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAjouterUserComponent } from './admin-ajouter-user.component';

describe('AdminAjouterUserComponent', () => {
  let component: AdminAjouterUserComponent;
  let fixture: ComponentFixture<AdminAjouterUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAjouterUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAjouterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

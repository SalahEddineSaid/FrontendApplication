import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAjouterThematiqueComponent } from './admin-ajouter-thematique.component';

describe('AdminAjouterThematiqueComponent', () => {
  let component: AdminAjouterThematiqueComponent;
  let fixture: ComponentFixture<AdminAjouterThematiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAjouterThematiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAjouterThematiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

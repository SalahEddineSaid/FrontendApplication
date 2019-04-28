import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditerRdvComponent } from './admin-editer-rdv.component';

describe('AdminEditerRdvComponent', () => {
  let component: AdminEditerRdvComponent;
  let fixture: ComponentFixture<AdminEditerRdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditerRdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditerRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

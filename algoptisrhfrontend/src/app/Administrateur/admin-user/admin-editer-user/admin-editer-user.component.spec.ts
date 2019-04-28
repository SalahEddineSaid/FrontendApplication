import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditerUserComponent } from './admin-editer-user.component';

describe('AdminEditerUserComponent', () => {
  let component: AdminEditerUserComponent;
  let fixture: ComponentFixture<AdminEditerUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditerUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRdvComponent } from './admin-rdv.component';

describe('AdminRdvComponent', () => {
  let component: AdminRdvComponent;
  let fixture: ComponentFixture<AdminRdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

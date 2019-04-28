import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingroupeComponent } from './admin-groupe.component';

describe('AdmingroupeComponent', () => {
  let component: AdmingroupeComponent;
  let fixture: ComponentFixture<AdmingroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmingroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmingroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

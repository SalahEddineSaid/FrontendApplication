import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminThematiqueComponent } from './admin-thematique.component';

describe('AdminThematiqueComponent', () => {
  let component: AdminThematiqueComponent;
  let fixture: ComponentFixture<AdminThematiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminThematiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminThematiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

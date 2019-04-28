import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditerThematiqueComponent } from './admin-editer-thematique.component';

describe('AdminEditerThematiqueComponent', () => {
  let component: AdminEditerThematiqueComponent;
  let fixture: ComponentFixture<AdminEditerThematiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditerThematiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditerThematiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

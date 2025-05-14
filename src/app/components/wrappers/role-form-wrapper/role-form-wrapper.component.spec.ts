import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleFormWrapperComponent } from './role-form-wrapper.component';

describe('RoleFormWrapperComponent', () => {
  let component: RoleFormWrapperComponent;
  let fixture: ComponentFixture<RoleFormWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleFormWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleFormWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

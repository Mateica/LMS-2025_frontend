import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleTableWrapperComponent } from './role-table-wrapper.component';

describe('RoleTableWrapperComponent', () => {
  let component: RoleTableWrapperComponent;
  let fixture: ComponentFixture<RoleTableWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleTableWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleTableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

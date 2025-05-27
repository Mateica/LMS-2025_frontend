import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentServiceStaffFormComponent } from './student-service-staff-form.component';

describe('StudentServiceStaffFormComponent', () => {
  let component: StudentServiceStaffFormComponent;
  let fixture: ComponentFixture<StudentServiceStaffFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentServiceStaffFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentServiceStaffFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

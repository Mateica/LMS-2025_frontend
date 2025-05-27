import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentServiceStaffTableComponent } from './student-service-staff-table.component';

describe('StudentServiceStaffTableComponent', () => {
  let component: StudentServiceStaffTableComponent;
  let fixture: ComponentFixture<StudentServiceStaffTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentServiceStaffTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentServiceStaffTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

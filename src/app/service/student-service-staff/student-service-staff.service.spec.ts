import { TestBed } from '@angular/core/testing';

import { StudentServiceStaffService } from './student-service-staff.service';

describe('StudentServiceStaffService', () => {
  let service: StudentServiceStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentServiceStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

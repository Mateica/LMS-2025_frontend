import { TestBed } from '@angular/core/testing';

import { SubjectAttendanceService } from './subject-attendance.service';

describe('SubjectAttendanceService', () => {
  let service: SubjectAttendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectAttendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { StudentOnYearService } from './student-on-year.service';

describe('StudentOnYearService', () => {
  let service: StudentOnYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentOnYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

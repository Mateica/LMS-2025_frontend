import { TestBed } from '@angular/core/testing';

import { ExamSchedulerService } from './exam-scheduler.service';

describe('ExamSchedulerService', () => {
  let service: ExamSchedulerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamSchedulerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

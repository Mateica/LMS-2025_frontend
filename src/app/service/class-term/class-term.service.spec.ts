import { TestBed } from '@angular/core/testing';

import { ClassTermService } from './class-term.service';

describe('ClassTimeService', () => {
  let service: ClassTermService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassTermService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

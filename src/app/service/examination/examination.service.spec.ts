import { TestBed } from '@angular/core/testing';

import { ExaminationService } from './examination.service';

describe('ExminationService', () => {
  let service: ExaminationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExaminationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

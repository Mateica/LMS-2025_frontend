import { TestBed } from '@angular/core/testing';

import { EvaluationGradeService } from './evaluation-grade.service';

describe('EvaluationGradeService', () => {
  let service: EvaluationGradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluationGradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

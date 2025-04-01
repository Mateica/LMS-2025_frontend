import { TestBed } from '@angular/core/testing';
import { OutcomeService } from './outcome.service';

describe('AftermathService', () => {
  let service: OutcomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutcomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

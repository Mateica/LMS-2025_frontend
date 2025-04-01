import { TestBed } from '@angular/core/testing';

import { TeachingTypeService } from './teaching-type.service';

describe('TeachinTypeService', () => {
  let service: TeachingTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeachingTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

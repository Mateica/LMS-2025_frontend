import { TestBed } from '@angular/core/testing';

import { TitleTypeService } from './title-type.service';

describe('TitleTypeService', () => {
  let service: TitleTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

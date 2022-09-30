import { TestBed } from '@angular/core/testing';

import { NameslistService } from './nameslist.service';

describe('NameslistService', () => {
  let service: NameslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

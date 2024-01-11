import { TestBed } from '@angular/core/testing';

import { CricapiService } from './cricapi.service';

describe('CricapiService', () => {
  let service: CricapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CricapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

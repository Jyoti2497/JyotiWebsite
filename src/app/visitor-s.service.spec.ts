import { TestBed } from '@angular/core/testing';

import { VisitorSService } from './visitor-s.service';

describe('VisitorSService', () => {
  let service: VisitorSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitorSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

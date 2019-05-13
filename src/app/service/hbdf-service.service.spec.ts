import { TestBed } from '@angular/core/testing';

import { HbdfServiceService } from './hbdf-service.service';

describe('HbdfServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HbdfServiceService = TestBed.get(HbdfServiceService);
    expect(service).toBeTruthy();
  });
});

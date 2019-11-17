import { TestBed } from '@angular/core/testing';

import { ToastyService } from './toasty.service';

describe('ToastyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastyService = TestBed.get(ToastyService);
    expect(service).toBeTruthy();
  });
});

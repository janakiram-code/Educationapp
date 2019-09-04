import { TestBed, inject } from '@angular/core/testing';

import { ServedataService } from './servedata.service';

describe('ServedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServedataService]
    });
  });

  it('should be created', inject([ServedataService], (service: ServedataService) => {
    expect(service).toBeTruthy();
  }));
});

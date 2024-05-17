import { TestBed } from '@angular/core/testing';

import { CreaArticoloService } from './crea-articolo.service';

describe('CreaArticoloService', () => {
  let service: CreaArticoloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreaArticoloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

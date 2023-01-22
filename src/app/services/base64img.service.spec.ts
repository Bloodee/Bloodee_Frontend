import { TestBed } from '@angular/core/testing';

import { Base64imgService } from './base64img.service';

describe('Base64imgService', () => {
  let service: Base64imgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Base64imgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PdfgenService } from './pdfgen.service';

describe('PdfgenService', () => {
  let service: PdfgenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfgenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

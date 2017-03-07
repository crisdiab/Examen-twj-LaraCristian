import { TestBed, inject } from '@angular/core/testing';

import { MasterurlService } from './masterurl.service';

describe('MasterurlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasterurlService]
    });
  });

  it('should ...', inject([MasterurlService], (service: MasterurlService) => {
    expect(service).toBeTruthy();
  }));
});

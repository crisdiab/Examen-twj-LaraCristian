import { TestBed, inject } from '@angular/core/testing';

import { ArtistaApiService } from './artista-api.service';

describe('ArtistaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtistaApiService]
    });
  });

  it('should ...', inject([ArtistaApiService], (service: ArtistaApiService) => {
    expect(service).toBeTruthy();
  }));
});

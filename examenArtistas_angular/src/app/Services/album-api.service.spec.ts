import { TestBed, inject } from '@angular/core/testing';

import { AlbumApiService } from './album-api.service';

describe('AlbumApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumApiService]
    });
  });

  it('should ...', inject([AlbumApiService], (service: AlbumApiService) => {
    expect(service).toBeTruthy();
  }));
});

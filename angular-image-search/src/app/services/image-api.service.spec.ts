import { TestBed } from '@angular/core/testing';

import { ImageApiService } from './image-api.service';

describe('ImageApiService', () => {
  let service: ImageApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

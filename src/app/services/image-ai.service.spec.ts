import { TestBed } from '@angular/core/testing';

import { ImageAIService } from './image-ai.service';

describe('ImageAIService', () => {
  let service: ImageAIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageAIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

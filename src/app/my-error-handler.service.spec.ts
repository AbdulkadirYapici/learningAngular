import { TestBed } from '@angular/core/testing';

import { MyErrorHandlerService } from './my-error-handler.service';

describe('MyErrorHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyErrorHandlerService = TestBed.get(MyErrorHandlerService);
    expect(service).toBeTruthy();
  });
});

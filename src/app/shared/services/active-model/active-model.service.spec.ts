import { TestBed, inject } from '@angular/core/testing';

import { ActiveModelService } from './active-model.service';

describe('ActiveModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveModelService]
    });
  });

  it('should be created', inject([ActiveModelService], (service: ActiveModelService) => {
    expect(service).toBeTruthy();
  }));
});

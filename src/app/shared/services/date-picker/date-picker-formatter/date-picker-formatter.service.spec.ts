import { TestBed, inject } from '@angular/core/testing';

import { DatePickerFormatterService } from './date-picker-formatter.service';

describe('DatePickerFormatterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatePickerFormatterService]
    });
  });

  it('should be created', inject([DatePickerFormatterService], (service: DatePickerFormatterService) => {
    expect(service).toBeTruthy();
  }));
});

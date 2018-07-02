import { TestBed, inject } from '@angular/core/testing';
import { DatePickerAdapterService } from './date-picker-adapter.service';

describe('DatePickerAdapterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatePickerAdapterService]
    });
  });

  it('should be created', inject([DatePickerAdapterService], (service: DatePickerAdapterService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';
import { MdcpsHttpInterceptor } from './mdcps-http-interceptor.service';

describe('HttpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MdcpsHttpInterceptor]
    });
  });

  it('should be created', inject([MdcpsHttpInterceptor], (service: MdcpsHttpInterceptor) => {
    expect(service).toBeTruthy();
  }));
});

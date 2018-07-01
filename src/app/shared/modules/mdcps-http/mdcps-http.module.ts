import { CommonModule } from '@angular/common';
import { MdcpsHttpInterceptor } from './mdcps-http-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: []
})
export class MdcpsHttpModule {
  /**
   * @static
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MdcpsHttpModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: MdcpsHttpInterceptor,
          multi: true
        }
      ]
    };
  }

  /**
   * @constructor
   * @param parentModule
   */
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: MdcpsHttpModule) {}
}

import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { SpinnerService } from './../../services/spinner/spinner.service';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';


@Injectable()
export class MdcpsHttpInterceptor implements HttpInterceptor {

  /**
   * @constructor
   * @param spinner
   */
  constructor(private spinner: SpinnerService) {
    this.onJSErrors();
  }

  /**
   * @public
   * @param req
   * @param next
   *
   * @return: {Observable<HttpEvent<any>>}
   * @description: N/A
   */
  public intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {

    this.spinner.show();
    return next.handle(req)
      .do(evt => {
        if (evt instanceof HttpResponse) {
            this.spinner.hide();
        }
      },
      (err) => {
        this.spinner.hide();
      },
      () => {
        this.spinner.hide();
      });
  }

  /**
   * @public
   * @return: void
   * @description: N/A
   */
  private onJSErrors(): void {
    window.onerror = (e: any): void => {
      console.log(e);
      this.spinner.hide();
    }
  }
}
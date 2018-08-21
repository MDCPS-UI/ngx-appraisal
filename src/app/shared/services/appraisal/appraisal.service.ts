import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UtilService } from './../util/util.service';
import { AjaxService } from './../ajax/ajax.service';
import { AjaxRequest } from './../ajax/ajax.interface';
import { serviceConstants } from './../../constants/service.constants';

// putting common headers outside the request
const commonHeaders: any = {
  'Content-Type': 'application/json'
};

@Injectable()
export class AppraisalService {
  /**
   * @constructor
   * @param {ajax<AjaxService>}
   */
  constructor(
    private ajax: AjaxService,
    private util: UtilService) {
  }

  /**
   * @public
   * @param serviceName
   * @param paramsArr
   * @param req
   */
  public request(serviceName, paramsArr?: any[], req?: AjaxRequest): Observable<any> {
    const config: any = serviceConstants[serviceName];
    if (!config) { return Observable.empty(); }

    req = req || {};
    const url: string = (!config.isLocal)
      ? this.util.format((config.url || req.url), paramsArr)
      : config.localUrl;

    const method: string = (!config.isLocal)
      ? config.method
      : 'GET';

    const headers: any = _.extend({}, (config.headers || {}), commonHeaders);
    return this.ajax.request<any>({
      url: url,
      body: req.body,
      headers: headers,
      method: method
    });
  }

  /**
   * @public
   */
  public init(appraisalId: string, serviceName,
    paramsArr?: any[], req?: AjaxRequest): Observable<any> {
    if (!!appraisalId) {
      return this.request.call(
        this, serviceName, [appraisalId], req
      );
    }
    this.util.navigateIt('landing');
    return Observable.empty();
  }
}

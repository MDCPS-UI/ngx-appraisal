import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UtilService } from './../util/util.service';
import { AjaxService } from './../ajax/ajax.service';
import { AjaxRequest } from './../ajax/ajax.interface';
import { serviceConstants } from './../../constants/service.constants';
import { ActiveModelService } from '../active-model/active-model.service';

// putting common headers outside the request
const commonHeaders: any = {
  'Content-Type': 'application/json'
};

// mapping for cached services
const cachedKeys: any = {
  getDmgInfo: 'dmg',
  getCounties: 'counties',
  getNavWorkers: 'navWorkers'
};


@Injectable()
export class AppraisalService {
  /**
   * @constructor
   * @param {ajax<AjaxService>}
   */
  constructor(
    private ajax: AjaxService,
    private util: UtilService,
    private activeModel: ActiveModelService) {
  }

  /**
   * @public
   * @param serviceName
   * @param paramsArr
   * @param req
   */
  public request(serviceName, paramsArr?: any[], req?: AjaxRequest): Observable<any> {

    // in case if the response is available in the cache
    // retrieve it without making an http call.
    const cachedResponses: any = this.activeModel.getResponse();
    if (cachedKeys[serviceName] && cachedResponses[cachedKeys[serviceName]]) {
      return Observable.of(new Object()).mapTo(
        cachedResponses[cachedKeys[serviceName]]
      );
    }

    // if the data wasn't found in the cache,
    // make a fresh call and cache it if opted in.
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
      method: method,
      headers: headers,
      //body: JSON.stringify(req.body)
      options: {
       body: JSON.stringify(req.body)
      }
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

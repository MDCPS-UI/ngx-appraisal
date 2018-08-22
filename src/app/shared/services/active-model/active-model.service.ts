import * as _ from 'lodash';
import { Injectable } from '@angular/core';

@Injectable()
export class ActiveModelService {
  /**
   * @private
   * @type: any[]
   */
  private _children: any[];
  /**
   * @private
   * @type: string
   */
  private _appraisal: any;
  /**
   * @private
   * @type: any
   */
  private _childData: any;
  /**
   * @private
   * @type: any
   */
  private _responses: any = {};

  /**
   * @private
   * @type: string
   */
  private _workerEmail: string;

  /**
   * @constructor
   */
  constructor() { }

  /**
   * @public
   * @param: {email<string>}
   * @returns: void
   * @description: N/A
   */
  public setWorkerEmail(email: string): void {
    this._workerEmail = email;
  }

  /**
   * @public
   * @returns: string
   * @description: N/A
   */
  public getWorkerEmail(): string {
    const email: string = this._workerEmail;
    return email || window.sessionStorage.getItem('workerEmail') || '';
  }

  /**
   * @public
   * @param: {data<any>}
   * @returns: void
   * @description: N/A
   */
  public setAppraisal(data: any): void {
    this._appraisal = data;
  }

  /**
   * @public
   * @returns: any
   * @description: N/A
   */
  public getAppraisal(): any {
    return this._appraisal;
  }

  /**
   * @public
   * @param: {data<any>}
   * @returns: void
   * @description: N/A
   */
  public setChildData(data: any): void {
    this._childData = data;
  }

  /**
   * @public
   * @returns: any
   * @description: N/A
   */
  public getChildData(): any {
    return this._childData;
  }

  /**
   * @public
   * @param: {data<any>}
   * @returns: void
   * @description: N/A
   */
  public setChildren(data: any[]): void {
    this._children = data;
  }

  /**
   * @public
   * @returns: any
   * @description: N/A
   */
  public getChildren(): any {
    return this._children;
  }

  /**
   * @public
   * @param: {value<any>}
   * @param: {key<string>}
   * @param: {extend<boolean>}
   * @returns: void
   * @description: N/A
   */
  public setResponse(value: any, key?: string, extend?: boolean): void {
    if (_.isObject(value) && extend) {
      this._responses = _.extend({}, this._responses, value);
      return;
    }

    if (value && key) {
      this._responses[key] = value;
      return;
    }
    console.log(`Invalid data`);
  }

  /**
   * @public
   * @returns: any
   * @description: N/A
   */
  public getResponse(key?: string): any {
    if (key) {
      return this._responses[key] || null;
    }
    return this._responses;
  }
}

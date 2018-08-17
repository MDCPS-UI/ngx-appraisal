import { Injectable } from '@angular/core';

@Injectable()
export class ActiveModelService {
  /**
   * @public
   * @type: string
   */
  public appraisalData: any;

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
   * @returns: void
   * @description: N/A
   */
  public getWorkerEmail(): string {
    const email: string = this._workerEmail;
    return email || window.sessionStorage.getItem('workerEmail') || '';
  }
}

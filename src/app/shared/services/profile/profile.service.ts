import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { ActiveModelService } from './../active-model/active-model.service';

// access to the native window object.
declare const window: any;

/**
 * @interface
 */
export interface MdcpsNavigationEvent {
  label?: string;
  routePrefix?: string;
  routeSuffix?: string;
  navigationUrl: string;
}

@Injectable()
export class ProfileService {
  /**
   * @private
   */
  private selection$: BehaviorSubject<any> = new BehaviorSubject<any>({});
  /**
   * @private
   */
  private activePage$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  /**
   * @private
   */
  private navigate$: Subject<MdcpsNavigationEvent> = new Subject<MdcpsNavigationEvent>();

  /**
   * @constructor
   */
  constructor(private activeModel: ActiveModelService) { }

  /**
   * @public
   * @param {e<MdcpsNavigationEvent>}
   * @return void
   */
  public setNavigation(e: MdcpsNavigationEvent): void {
    this.navigate$.next(e);
  }

  /**
   * @public
   * @return {Subject<MdcpsNavigationEvent>}
   */
  public getNavigation(): Subject<MdcpsNavigationEvent> {
    return this.navigate$;
  }

  /**
   * @public
   * @param {pageName<string>}
   * @return void
   */
  public setActivePage(pageName: string): void {
    this.activePage$.next(pageName);
  }

  /**
   * @public
   * @return {Subject<string>}
   */
  public getActivePage(): Subject<string> {
    return this.activePage$;
  }

  /**
   * @public
   * @param {selection<any>}
   * @return void
   */
  public setYaSelection(selection: any): void {
    this.selection$.next(selection);
  }

  /**
   * @public
   * @return {BehaviorSubject<any>}
   */
  public getYaSelection(): BehaviorSubject<any> {
    return this.selection$;
  }

  /**
   * @public
   * @param: {key<string>}
   * @param: {value<any>}
   * @return void
   */
  public setItem(key: string, value: any): void {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * @public
   * @param: {key<string>}
   * @return {any}
   */
  public getItem(key: string): any {
    let parsedVal: any;
    const value: string = window.sessionStorage.getItem(key);

    try {
      parsedVal = JSON.parse(value);
    } catch (e) {
      parsedVal = value;
    }

    return parsedVal;
  }

  /**
   * @public
   * @return boolean
   */
  public hasAppraisal(): boolean {
    const selection: any = this.activeModel.getChildData() || {};
    return selection && selection['macwisId'];
  }
}

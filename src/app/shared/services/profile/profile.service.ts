import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs/Rx';

/**
 * @interface
 */
export interface MdcpsNavigationEvent {
  label?: string;
  routePrefix?: string;
  routeSuffix?: string;
  navigationUrl: string;
};

/**
 * @author: Shoukath Mohammed
 */
@Injectable()
export class ProfileService {
  /**
   * @private
   */
  private selection$: Subject<any> = new Subject<any>();
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
  constructor() { }

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
   * @return {Subject<any>}
   */
  public getYaSelection(): Subject<any> {
    return this.selection$;
  }
}

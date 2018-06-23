import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

/**
 * @interface
 */
export interface MdcpsNavigationEvent {
  navigationUrl: string;
  label?: string;
  routePrefix?: string;
  routeSuffix?: string;
};

/**
 * @author: Shoukath Mohammed
 */
@Injectable()
export class ProfileService {
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
}

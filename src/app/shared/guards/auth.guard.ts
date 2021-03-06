import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UtilService } from './../services/util/util.service';
import { ProfileService } from './../services/profile/profile.service';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  /**
   * @constructor
   * @param {util<UtilService>}
   * @param {profileService<ProfileService>}
   */
  constructor(
    private util: UtilService,
    private profileService: ProfileService) { }

  /**
   * @public
   * @param {next<ActivatedRouteSnapshot>}
   * @param {state<RouterStateSnapshot>}
   */
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const params: any = next.queryParams;
    if (!!params && !!params['uname']) {
      if (this.profileService.hasAppraisal()
        || state.url.includes('/landing') || params['appraisalId']) {
        return true;
      } else {
        this.util.navigateIt('landing');
      }
    } else {
      this.util.navigateIt('error');
    }
  }

  /**
   * @public
   * @param {next<ActivatedRouteSnapshot>}
   * @param {state<RouterStateSnapshot>}
   */
  public canActivateChild(route: ActivatedRouteSnapshot
    , state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}

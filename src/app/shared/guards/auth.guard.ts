import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UtilService } from './../services/util/util.service';
import { ProfileService } from './../services/profile/profile.service';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  /**
   * @constructor
   * @param {router<Router>}
   * @param {profileService<ProfileService>}
   */
  constructor(
    private router: Router,
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

    const email: string = this.util.getQueryStringValue('uname');
    const childId: string = this.util.getQueryStringValue('childId');

    if (!!email) {
      if (this.profileService.hasAppraisal()
        || state.url.includes('/landing') || childId) {
        return true;
      } else {
        this.navigateIt('landing');
      }
    } else {
      this.navigateIt('error');
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

  /**
   * @private
   * @param: {route<string>}
   * @returns void
   */
  private navigateIt(route: string): void {
    this.router.navigate([`/${route}`], {
      queryParamsHandling: 'merge',
      preserveQueryParams: true
    });
  }
}

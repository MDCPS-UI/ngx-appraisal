import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProfileService } from './../services/profile/profile.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  /**
   * @constructor
   * @param {router<Router>}
   * @param {profileService<ProfileService>}
   */
  constructor(
    private router: Router,
    private profileService: ProfileService) {}

  /**
   * @public
   * @param {next<ActivatedRouteSnapshot>}
   * @param {state<RouterStateSnapshot>}
   */
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.profileService.hasAppraisal()) {
      return true;
    }
    this.router.navigate(['/landing'], {queryParamsHandling: 'merge', preserveQueryParams: true});
  }
}

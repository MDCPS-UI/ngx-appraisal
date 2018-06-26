import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ProfileService } from './../shared/services/profile/profile.service';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'mdcps-ya-forms',
  templateUrl: './ya-forms.component.html',
  styleUrls: ['./ya-forms.component.scss']
})
export class YaFormsComponent implements OnInit {
  /**
   * @public
   */
  public formName: string;

  /**
   * @constructor
   * @param {router<Router>}
   * @param {route<ActivatedRoute>}
   */
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private profileService: ProfileService) {
    this.subscribeToRouterEvents();
  }

  /**
   * @public
   */
  public ngOnInit(): void { }

  /**
   * @private
   * @returns: void
   * @description: responsible for displaying header & footer
   * based on the route for mWeb.
   */
  private subscribeToRouterEvents(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        try {
          const firstChild: any = this.route.snapshot.firstChild;

          this.formName = firstChild.data['formName'];

          // setting the activated route so it can be
          // consumed by other pages.
          this.profileService.setActivePage(firstChild.url[0].path);
        } catch(e) {
          console.log('Unable to set the form name...');
        }
      }
    });
  }
}

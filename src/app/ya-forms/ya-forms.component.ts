import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute) {
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
          this.formName = this.route.snapshot.firstChild.data['formName'];
        } catch(e) {
          console.log('Unable to set the form name...');
        }
      }
    });
  }
}

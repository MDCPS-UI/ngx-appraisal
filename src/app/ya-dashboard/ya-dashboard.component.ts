import { Component, OnInit } from '@angular/core';
import { SIDE_NAV_TABS } from './../shared/constants/side-nav.constants';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'mdcps-dashboard',
  templateUrl: './ya-dashboard.component.html',
  styleUrls: ['./ya-dashboard.component.scss']
})
export class YaDashboardComponent implements OnInit {
  /**
   * @public
   */
  public tabs: any[] = [];

  /**
   * @constructor
   */
  constructor() { }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.tabs = SIDE_NAV_TABS;
  }
}

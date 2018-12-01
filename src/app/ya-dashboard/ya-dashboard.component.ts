import { Component, OnInit } from '@angular/core';
import { SIDE_NAV_TABS } from './../shared/constants/side-nav.constants';
import { ProfileService } from './../shared/services/profile/profile.service';

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
   * @public
   */
  public isDisabled: boolean = false;

  /**
   * @constructor
   */
  constructor(private profileService: ProfileService) { }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.tabs = SIDE_NAV_TABS;
    this.isDisabled = this.profileService.hasAppraisal()
    || this.profileService.getItem('appraisal');
  }
}

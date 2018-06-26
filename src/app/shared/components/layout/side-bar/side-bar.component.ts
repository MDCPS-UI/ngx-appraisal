import { Component, OnInit, Input } from '@angular/core';
import { ProfileService, MdcpsNavigationEvent } from '../../../services/profile/profile.service';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'mdcps-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  /**
   * @public
   */
  @Input()
  public tabs: any[] = [];

  /**
   * @public
   */
  public activePage: string;

  /**
   * @constructor
   */
  constructor(private profileService: ProfileService) { }

  /**
   *  @public
   *  @type: method<life cycle hook>
   *  @return: void
   *  @description: N/A
   */
  public ngOnInit(): void {
    this.profileService.getActivePage()
    .subscribe(value => this.activePage = `/${value}`);
  }

  /**
   * @public
   */
  public onNavigate(e: MouseEvent,
    prefix: string, tab: MdcpsNavigationEvent): void {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    // send the navigation event.
    this.profileService.setNavigation({
      ...tab, routePrefix: prefix
    });
  }
}

import { Component, OnInit } from '@angular/core';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'mdcps-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  public tabs: any[] = [];

  /**
   * @constructor
   */
  constructor() { }

  /**
   *  @public
   *  @type: method<life cycle hook>
   *  @return: void
   *  @description: N/A
   */
  public ngOnInit(): void {
    this.tabs = [
      {
        label: 'Demographics',
        navigationUrl: '/demographics'
      },
      {
        label: 'Skills',
        navigationUrl: '/skills'
      },
      {
        label: 'Stipends',
        navigationUrl: '/stipends'
      }
    ];
  }
}

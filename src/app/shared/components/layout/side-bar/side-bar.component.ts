import { Component, OnInit, Input } from '@angular/core';

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
   * @constructor
   */
  constructor() { }

  /**
   *  @public
   *  @type: method<life cycle hook>
   *  @return: void
   *  @description: N/A
   */
  public ngOnInit(): void { }
}

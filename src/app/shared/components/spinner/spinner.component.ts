import * as _ from 'lodash';
import { Subscription } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { SpinnerService } from './../../services/spinner/spinner.service';

/**
 * @interface
 */
export interface SpinnerConfig {
  backdrop?: string;
  spinnerText?: string;
  imageSource?: string;
}

/**
 * @default
 */
const spinnerDefaults: SpinnerConfig = {
  backdrop: 'black',
  spinnerText: 'Loading...',
  imageSource: '/assets/images/mdcps-spinner.gif'
};

@Component({
  selector: 'mdcps-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  /**
   * @public
   * @type: boolean
   */
  public display = false;
  /**
   * @public
   * @type: Subscription
   */
  public subsription: Subscription;
  /**
   * @public
   * @type: SpinnerConfig
   * @Input
   */
  @Input()
  public config: SpinnerConfig;

  /**
   * @constructor
   */
  constructor(private spinner: SpinnerService) {
    this.initSubstription();
  }

  /**
   *  @public
   *  @type: method<life cycle hook>
   *  @return: void
   *  @description: N/A
   */
  public ngOnInit() {
   this.config = _.extend({}, spinnerDefaults, (this.config || {}));
  }

  /**
   * @private
   * @return: void
   * @description: subscribes to the spinner display event.
   */
  private initSubstription(): void {
    this.subsription = this.spinner.load()
    .subscribe(value => {
      this.display = value;
    });
  }
}

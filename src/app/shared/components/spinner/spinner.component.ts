import * as _ from 'lodash';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, Input } from '@angular/core';
import { SpinnerService } from './../../services/spinner/spinner.service';

/**
 * @interface
 */
export interface SpinnerConfig {
  backdrop?: string;
  spinnerText?: string;
  imageSource?: string;
};

/**
 * @default
 */
const spinnerDefaults: SpinnerConfig = {
  backdrop: 'black',
  spinnerText: 'Loading...',
  imageSource: '/assets/images/cvs-spinner.gif'
};

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'cvs-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  public display: boolean = false;
  public subsription: Subscription;

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
      console.log(value);
      this.display = value;
    });
  }
}

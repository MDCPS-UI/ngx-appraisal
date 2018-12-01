import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { NgbDateStruct, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mdcps-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [NgbDatepickerConfig]
})
export class DatePickerComponent implements OnInit {
  /**
   * @public
   */
  @Input()
  public id = '';

  /**
   * @public
   */
  @Input()
  public class = '';

  /**
   * @public
   */
  @Input()
  public group: FormGroup;

  /**
   * @public
   */
  @Input()
  public type = 'text';

  /**
   * @private
   */
  private _disabled = false;

  /**
   * @public
   *
   * @description: set value accessor
   */
  @Input()
  public get disabled(): boolean {
    return this.disabled;
  }

  /**
   * @public
   *
   * @description: set value accessor
   */
  public set disabled(state: boolean) {
    this._disabled = state || false;

    if (!this.group || !this.controlName) {
      return;
    }

    this.group.get(this.controlName).disable({
      onlySelf: this._disabled
    });
  }

  /**
   * @public
   */
  @Input()
  public controlName: string;

  /**
   * @public
   */
  @Input()
  public placeholder = 'MM/DD/YYYY';

  /**
   * @public
   */
  @Input()
  public disableWeekends = false;

  /**
   * @constructor
   *
   * @param: {config<NgbDatepickerConfig>}
   */
  constructor(private config: NgbDatepickerConfig) {
    this.setDatePickerConfig();
  }

  /**
   * @public
   */
  public ngOnInit(): void { }

  /**
   * @public
   * @returns: void
   * @description: sets the datepicker range and
   * global configuration.
   */
  public setDatePickerConfig(): void {
    this.config.minDate = { year: 1970, month: 1, day: 1 };
    this.config.maxDate = { year: new Date().getFullYear(), month: 12, day: 31 };

    // hide the days that don't belong to
    // current month are not visible
    this.config.outsideDays = 'hidden';

    // disable weekend options
    this.config.markDisabled = this.shouldDisableWeekends.bind(this);
  }

  /**
   * @public
   * @returns: boolean
   * @description: a helper method to disable the
   * weekends on a calandar.
   */
  public shouldDisableWeekends(date: NgbDateStruct): boolean {
    if (this.disableWeekends) {
      const d: Date = new Date(date.year, date.month - 1, date.day);
      return d.getDay() === 0 || d.getDay() === 6;
    }
    return false;
  }
}

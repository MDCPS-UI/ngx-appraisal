import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControlName } from '@angular/forms';
import { NgbDateStruct, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

/**
 * @author: Shoukath Mohammed
 */
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
  public id: string = '';

  /**
   * @public
   */
  @Input()
  public class: string = '';

  /**
   * @public
   */
  @Input()
  public group: FormGroup;

  /**
   * @public
   */
  @Input()
  public type: string = 'text';

  /**
   * @public
   */
  @Input()
  public controlName: FormControlName;

  /**
   * @public
   */
  @Input()
  public placeholder: string = 'MM/DD/YYYY';

  /**
   * @public
   */
  @Input()
  public disableWeekends: boolean = false;

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

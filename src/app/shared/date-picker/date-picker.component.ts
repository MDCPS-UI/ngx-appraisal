import { Component, OnInit, Input } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControlName } from '@angular/forms';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'mdcps-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
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
  public placeholder: string = 'YYYY-MM-DD';

  /**
   * @constructor
   */
  constructor() { }

  /**
   * @public
   */
  public ngOnInit(): void { }

  /**
   * @public
   */
  public isWeekend(date: NgbDateStruct): boolean {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  /**
   * @public
   */
  public isDisabled(date: NgbDateStruct, current: {month: number}): boolean {
    return date.month !== current.month;
  }
}

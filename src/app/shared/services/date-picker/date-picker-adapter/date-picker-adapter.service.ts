import { Injectable } from '@angular/core';
import { UtilService } from './../../util/util.service';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class DatePickerAdapterService extends NgbDateAdapter<string> {

  /**
   * @constructor
   */
  constructor(private util: UtilService) {
    super();
  }

  /**
   * @public
   * @param {date<moment.Moment>}
   *
   * @returns: NgbDateStruct
   * @description: helper method that formats the
   * date from model to standard Ngb date format.
   */
  public fromModel(date: string): NgbDateStruct {
    if (!date) { return null; }

    const n: Date = new Date(date);
    const d: string[] = ['' + n.getMonth(), '' + n.getDate(), '' + n.getFullYear()];

    return {
      year: +(d[2]),
      day: <number>(this.util.toTwoDigitFormat(d[1], 'num')),
      month: <number>(this.util.toTwoDigitFormat(d[0], 'num'))
    };
  }

  /**
   * @public
   * @param {date<NgbDateStruct>}
   *
   * @returns: any
   * @description: helper method that formats the
   * date & pass it to the model to string format.
   */
  public toModel(date: NgbDateStruct): any {
    if (!date || !date.day || !date.month || !date.year) {
      return null;
    }

    return (
      this.util.toTwoDigitFormat(date.month)
      + '/' + this.util.toTwoDigitFormat(date.day)
      + '/' + date.year
    );
  }
}

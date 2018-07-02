import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

// might need to polyfill depending
// on needed browser support...
const isInt: Function = Number.isInteger;

/**
 * @author: Shoukath Mohammed
 */
@Injectable()
export class DatePickerAdapterService extends NgbDateAdapter<string> {

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * @public
   * @param {date<moment.Moment>}
   *
   * @returns: NgbDateStruct
   * @description: helper method that formats the
   * date from model in moment format.
   */
  public fromModel(date: string): NgbDateStruct {
    if (!date) { return null; }

    const d: string[] = date.split('-');
    return {
      year: +(d[0]),
      day: <number>(this.toTwoDigitFormat(d[2], 'num')),
      month: <number>(this.toTwoDigitFormat(d[1], 'num'))
    };
  }

  /**
   * @public
   * @param {date<NgbDateStruct>}
   *
   * @returns: moment.Moment
   * @description: helper method that formats the
   * date & pass it to the model in moment format.
   */
  public toModel(date: NgbDateStruct): any {
    if (!date || !date.day || !date.month || !date.year) {
      return null;
    }
    return (date.year + '-'
      + this.toTwoDigitFormat(date.month)
      + '-' + this.toTwoDigitFormat(date.day));
  }

  /**
   * @public
   * @default: string
   * @param {value<string | number>}
   * @param {format<'str' | 'num'>}
   *
   * @returns: string | number
   * @description: helper method that formats the
   * prepends `0` to the date if the length is `1`.
   */
  public toTwoDigitFormat(value: string | number,
    format?: 'str' | 'num'): string | number {
    let strToFormat: any = value;

    // convert the numbered format to
    // string so we can check the length
    if (typeof value == 'number') {
      strToFormat = value.toString();
    }

    // in case if the length is `1`, prepend
    // zero before the value
    if (strToFormat.length == 1) {
      strToFormat = ('0' + strToFormat);
    }

    // if the value is requested in numbered
    // format
    if (format && format == 'num') {
      strToFormat = +strToFormat;
    }
    return strToFormat;
  }
}

import { Injectable } from '@angular/core';
import { UtilService } from './../../util/util.service';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class DatePickerFormatterService extends NgbDateParserFormatter {
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
   * @description: helper method that parses the
   * date from string to standard Ngb date format.
   */
  public parse(date: string): NgbDateStruct {
    if (!date) { return null; }

    const d: string[] = date.split('/');
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
   * @returns: string
   * @description: helper method that formats the
   * date from model in requested formated.
   *
   * @example: `2018-07-02` -> `02/07/2018`
   */
  public format(date: NgbDateStruct): string {
    if (!date) { return ''; }
    return `${this.util.toTwoDigitFormat(date.month)}/${this.util.toTwoDigitFormat(date.day)}/${date.year}`;
  }
}

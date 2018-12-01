import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SpinnerService } from './../spinner/spinner.service';

// access to the native window object
declare const window: any;

@Injectable()
export class UtilService {

  /**
   * @constructor
   */
  constructor(
    private router: Router,
    private spinner: SpinnerService) { }

  /**
   * @public
   * @param: {arr<Subscription[]>}
   * @return: void
   * @description: unsubscribes active subscriptions on the page.
   */
  public static unsubscribe(arr: Subscription[]): void {
    if (!Array.isArray(arr)) { return; }

    // safely unsubscribe the subscriptions
    for (let i = 0; i < arr.length; i++) {
      if (!!arr[i]) {
        arr[i].unsubscribe();
      }
    }
  }

  /**
   * @public
   * @description:  takes the unformatted string
   * and formats it by replacing the the arbitary
   * text inside the curly braces with the dynamic
   * values.
   *
   * This is similar to `String.format` but it doesn't
   * extract the arguments directly instead it expects
   * the second argument to be an array of dynamic values
   * corresponding to their indexes in the string to format.
   *
   * If there are no dynamic values to be replaced,
   * the second argument can be passed as false
   *
   * @return: {string} formatted string
   */
  public format(strToFormat: string,
    args: any[] | null): string {

    let str: string = strToFormat;

    // in case if URL doesn't exist return empty
    if (!str) { return ''; }

    // if there are no arguments return the URL itself
    if (!args) { return str; }

    // construct the url by replacing the arbitary
    // text inside the curly braces
    for (let i = 0; i < (<any[]>args).length; i++) {
      str = str.replace(new RegExp('\\{' + i + '\\}', 'gi'),
        (<any[]>args)[i]);
    }
    return str;
  }

  /**
   * @public
   * @param: {path<string>}
   * @return: void
   * @description: navigates to the requested path.
   */
  public navigate(path: string): void {
    if (!path) { return; }

    const isPath: boolean = (path.indexOf('/') > -1);
    const _path: string = (!isPath) ? `/${path}` : path;
    this.spinner.show();

    // for demo purpose
    setTimeout(() => {
      this.spinner.hide();
      this.navigateIt(`dashboard${_path}`);
    }, 1000);
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
    if (strToFormat && strToFormat.length == 1) {
      strToFormat = ('0' + strToFormat);
    }

    // if the value is requested in numbered
    // format
    if (format && format == 'num') {
      strToFormat = +strToFormat;
    }
    return strToFormat;
  }

  /**
   * @public
   * @param: {key<string>} -> key for lookup
   * @return: string - query string value
   * @description: picks up the query string from the
   * URL & returns the value for the given key.
   *
   * @example:
   * URL -> `https://www.google.com?name=Nagulapally`
   *
   * this.getQueryStringValue('name') -> 'Nagulapally'
   */
  public getQueryStringValue(key: string, parse?: boolean): string {
    let value: any = window.unescape(
      (window.location.search || window.location.hash).replace(new RegExp('^(?:.*[&\\?]' +
        window.escape(key).replace(/[\.\+\*]/g, '\\$&') + '(?:\\=([^&]*))?)?.*$', 'i'), '$1')
    );

    // return parsed value, skip errors
    if (parse) {
      try { value = JSON.parse(value); } catch (e) { }
    }
    return value;
  }

  /**
   * @public
   * @param: {route<string>}
   * @returns void
   */
  public navigateIt(route: string): void {
    this.router.navigate([`/${route}`], {
      queryParamsHandling: 'merge',
      preserveQueryParams: true
    });
  }
}

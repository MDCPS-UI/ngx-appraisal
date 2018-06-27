import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SpinnerService } from './../spinner/spinner.service';

// access the native window object.
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
  public static format(key: string,
    args: any[] | null, strConst: any): string {

    let str: string = strConst ? strConst[key] : key;

    // in case if URL doesn't exist return empty
    if (!str) { return ''; }

    // if there are no arguments return the URL itself
    if (!args) { return str; }

    // construct the url by replacing the arbitary
    // text inside the curly braces
    for (let i = 0; i < (<any[]>args).length; i++) {
      str = str.replace(new RegExp("\\{" + i + "\\}", "gi"),
        (<any[]>args)[i]);
    }
    return str;
  }

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
   * @param: {path<string>}
   * @return: void
   * @description: navigates to the requested path.
   */
  public navigate(path: string): void {
    if (!path) { return; }

    const isPath: boolean = (path.indexOf('/') > -1);
    let _path: string = (!isPath) ? `/${path}` : path;
    this.spinner.show();

    // for demo purpose
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate([`/dashboard${_path}`]);
    }, 1000);
  }
}

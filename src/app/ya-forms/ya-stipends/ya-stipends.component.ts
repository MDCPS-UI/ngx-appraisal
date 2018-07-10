import { Component, OnInit } from '@angular/core';
import { YA_STPNDS_LIST } from './ya-stipends.constants';
import { UtilService } from './../../shared/services/util/util.service';
import { FormControl, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'mdcps-ya-stipends',
  templateUrl: './ya-stipends.component.html',
  styleUrls: ['./ya-stipends.component.scss']
})
export class YaStipendsComponent implements OnInit {
  /**
   * @public
   */
  public config: any;

  /**
   * @public
   */
  public stipendsForm: FormGroup;

  /**
   * @public
   */
  public stipendList: any = {};

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   * @param {util<UtilService>}
   */
  constructor(
    private fb: FormBuilder,
    private util: UtilService) {
    this.initFormConfig();

    // dynamic stipends data list
    this.stipendList = YA_STPNDS_LIST;
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.stipendsForm = this.fb.group({
      startUpStipendRequested: new FormControl('', []),
      seniorStipendRequestDate: new FormControl('', []),
      startUpStipendRequestDate: new FormControl('', []),
      seniorYearStipendRequested: new FormControl('', []),
      startUpStipendRequestedOther: new FormControl('', []),
      graduationStipendRequestDate: new FormControl('', []),
      collegeBoundStipendRequested: new FormControl('', []),
      collegeBoundStipendRequestDate: new FormControl('', []),
      graduationYearStipendRequested: new FormControl('', []),
      seniorYearStipendRequestedOther: new FormControl('', []),
      collegeBoundStipendRequestedOther: new FormControl('', []),
      graduationYearStipendRequestedOther: new FormControl('', [])
    });
  }

  /**
   * @public
   */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Continuing Support/Services',
      previousBtnLabel: 'Life SKills'
    };
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this.util.navigate('/services');
      console.log(event.form.value);
    }
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/skills');
  }

  /**
   * @public
   */
  public hasStipendRequested(stipend: any): boolean {
    const field: AbstractControl = this.stipendsForm.get(stipend.optionName);
    const fieldVal: string = (field) ? field.value : '';

    if (fieldVal == 'yes' || fieldVal == 'other') {
      return true;
    }
    return false;
  }
}

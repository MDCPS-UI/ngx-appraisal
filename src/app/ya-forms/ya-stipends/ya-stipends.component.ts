import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { getInsertStpdReqPayload } from './ya-stipends';
import { YA_STPNDS_LIST } from './ya-stipends.constants';
import { UtilService } from './../../shared/services/util/util.service';
import { FormControl, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { ProfileService } from './../../shared/services/profile/profile.service';
import { AppraisalService } from './../../shared/services/appraisal/appraisal.service';
import { ActiveModelService } from '../../shared/services/active-model/active-model.service';

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
   * @public
   */
  public appraisalId: string;


  /**
   * @public
   */
  public response: any = {};

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   * @param {util<UtilService>}
   */
  constructor(
    private fb: FormBuilder,
    private util: UtilService,
    private appraisal: AppraisalService,
    private profileService: ProfileService,
    private activeModel: ActiveModelService) {
    this.initFormConfig();
    this._init();

    // dynamic stipends data list
    this.stipendList = YA_STPNDS_LIST;
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.stipendsForm = this.fb.group({
      startUpStipendRequested: new FormControl('', []),
      personalStipendRequested: new FormControl('', []),
      seniorStipendRequestDate: new FormControl('', []),
      startUpStipendRequestDate: new FormControl('', []),
      lifeSkillStipendRequested: new FormControl('', []),
      seniorYearStipendRequested: new FormControl('', []),
      personalStipendRequestDate: new FormControl('', []),
      lifeSkillStipendRequestDate: new FormControl('', []),
      startUpStipendRequestedOther: new FormControl('', []),
      graduationStipendRequestDate: new FormControl('', []),
      collegeBoundStipendRequested: new FormControl('', []),
      personalStipendRequestedOther: new FormControl('', []),
      lifeSkillStipendRequestedOther: new FormControl('', []),
      collegeBoundStipendRequestDate: new FormControl('', []),
      graduationYearStipendRequested: new FormControl('', []),
      seniorYearStipendRequestedOther: new FormControl('', []),
      collegeBoundStipendRequestedOther: new FormControl('', []),
      graduationYearStipendRequestedOther: new FormControl('', [])
    });
  }

  /**
   * @private
   */
  private _init(): void {
    this.appraisalId = this.util.getQueryStringValue('appraisalId');

    this.appraisal.init(this.appraisalId, 'getStipendInfo')
      .subscribe(data => {

        if (!!data) {
          this._process(data);
          this.response = data;
        }

        // setting the responses so it can be retrieved
      this.activeModel.setResponse(this.response, null, true);
        
      })
  }

  /**
   * @private
   */
  private _process(data: any): void {

    const options: any = YA_STPNDS_LIST;
    
    const form: any = {};

   
      for (const option of options.items) {

        let val: any = this._get(data, option.optionName, option);

        form[option.optionName] = new FormControl(
          {
            disabled: option.isDisabled,
            value: val
          },
          option.validators
        )
      }
    
    this.stipendsForm = this.fb.group(form);

  }

  /**
   * @private
   */
  private _get(data: any, key: string, control: any): any {
    let val: any;

    if (control && control['isBool']) {
      val = data[key] || false;
    } else {
      val = data[key] || '';
    }
    return val;
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

    this._saveInfo(getInsertStpdReqPayload({
      data: event.value,
      stipendsInfo: this.response,
      emailId: this.util.getQueryStringValue('uname')
    }))
    this.util.navigate('/services');
    
  }

  /**
   * @private
   */
  private _saveInfo(data: any): void {
    this.appraisal.init(this.appraisalId,'saveStipendInfo', null, {body: data})
      .subscribe(v => {
        console.log(v);
      });
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

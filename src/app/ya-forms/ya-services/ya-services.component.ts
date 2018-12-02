import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { getInsertSrvcReqPayload } from './ya-services';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';
import { ProfileService } from './../../shared/services/profile/profile.service';
import { AppraisalService } from './../../shared/services/appraisal/appraisal.service';
import { ActiveModelService } from '../../shared/services/active-model/active-model.service';

// constant
import { YA_SRVC_LIST } from './ya-services.constants';

@Component({
  selector: 'mdcps-ya-services',
  templateUrl: './ya-services.component.html',
  styleUrls: ['./ya-services.component.scss']
})
export class YaServicesComponent implements OnInit {

  /**
   * @public
   */
  public config: any;

  /**
   * @public
   */
  public servicesForm: FormGroup;

  /**
   * @public
   */
  public serviceList: any = {};

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

    // dynamic service data list
    this.serviceList = YA_SRVC_LIST;
  }


  /**
   * @public
   */
  public ngOnInit(): void {
    this.servicesForm = this.fb.group({
      medicaid: new FormControl('', []),
      medicaidOtherText: new FormControl('', []),
      mentalHealth: new FormControl('', []),
      mentalHealthOtherText: new FormControl('', []),
      parentingClasses: new FormControl('', []),
      parentingClassesOtherText: new FormControl('', []),
      transportation: new FormControl('', []),
      transportationOtherText: new FormControl('', []),
      snap: new FormControl('', []),
      snapOtherText: new FormControl('', []),
      tanf: new FormControl('', []),
      tanfOtherText: new FormControl('', []),
      childCareVoucher: new FormControl('', []),
      childCareVoucherOtherText: new FormControl('', []),
      locateHousing: new FormControl('', []),
      locateHousingOtherText: new FormControl('', []),
      scheduleCounseling: new FormControl('', []),
      scheduleCounselingOtherText: new FormControl('', []),
      other: new FormControl('', []),
      otherOtherText: new FormControl('', []),
      notes: new FormControl('', [])
    });
  }

  /**
   * @private
   */
  private _init(): void {
    this.appraisalId = this.util.getQueryStringValue('appraisalId');

    this.appraisal.init(this.appraisalId, 'getCssInfo')
      .subscribe(data => {

      if (!!data) {
        this._process(data);
        this.response = data;
      }

      // setting the responses so it can be retrieved
      this.activeModel.setResponse(this.response, null, true);

      });
  }

  /**
   * @private
   */
  private _process(data: any): void {

    const options: any[] = YA_SRVC_LIST;

    const form: any = {};
    for (const option of options) {

      const val: any = this._get(data, option.optionName, option);

      form[option.optionName] = new FormControl(
        {
          disabled: option.isDisabled,
          value: val
        },
        option.validators
      );
    }
    this.servicesForm = this.fb.group(form);

  }

  /**
   * @private
   */
  private _get(data: any, key: string,  control: any): any {
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
  public onNext(event: any): void {

    this._saveInfo(getInsertSrvcReqPayload({
      data: event.value,
      srvcInfo: this.response,
      emailId: this.util.getQueryStringValue('uname')
    }));

    this.util.navigate('/personal');
  }

  /**
   * @private
   */
  private _saveInfo(data: any): void {
    this.appraisal.init(this.appraisalId, 'saveCssInfo', null, {body: data})
      .subscribe(v => {
        console.log(v);
      });
  }

  /**
   * @public
   * @param {event<any>}
   */
  public onPrevious(event: any): void {
    this.util.navigate('/stipends');
  }

  /**
   * @public
   */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Personal',
      previousBtnLabel: 'Stipends'
    };
  }
}

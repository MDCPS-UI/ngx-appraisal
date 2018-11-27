import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { getEmpReqPayload } from './ya-employment';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';
import { ProfileService } from './../../shared/services/profile/profile.service';
import { AppraisalService } from './../../shared/services/appraisal/appraisal.service';
import { ActiveModelService } from '../../shared/services/active-model/active-model.service';


 
@Component({
  selector: 'mdcps-ya-employment',
  templateUrl: './ya-employment.component.html',
  styleUrls: ['./ya-employment.component.scss']
})
export class YaEmploymentComponent implements OnInit {
  /**
   * @public
   */
  public config: any;

  /**
   * @public
   */
  public employmentForm: FormGroup;

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
   */
  constructor(
    private fb: FormBuilder,
    private util: UtilService,
    private appraisal: AppraisalService,
    private profileService: ProfileService,
    private activeModel: ActiveModelService) {
    this.initFormConfig();
    this._init();
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.employmentForm = this.fb.group({
      isDisabled: new FormControl('', []),
      isDisabledSSI: new FormControl('', []),
      isDisabledSSA: new FormControl('', []),
      isDisabilityNone: new FormControl('', []),
      disabilityExplain: new FormControl('', []),
      hasHadJob: new FormControl('', []),
      hasChildCare: new FormControl('', []),
      hasFoodServices: new FormControl('', []),
      hasHealthCare: new FormControl('', []),
      hasClerical: new FormControl('', []),
      hasMechanical: new FormControl('', []),
      hasElectrical: new FormControl('', []),
      hasSales: new FormControl('', []),
      hasCustService: new FormControl('', []),
      hasOther: new FormControl('', []),
      hasOtherExplain: new FormControl('', []),
      employmentType: new FormControl('', []),
      employmentLength: new FormControl('', []),
      enrolledEmpBenefit: new FormControl('', []),
      hourlyPayRate: new FormControl('', []),
      hourlyPayOtherExplain: new FormControl('', [])
    });
  }

  /**
   * @private
   */
  private _init(): void {
    this.appraisalId = this.util.getQueryStringValue('appraisalId');

    this.appraisal.init(this.appraisalId, 'getEmpInfo')
      .subscribe(data => {
        this.response = data;
      })
  }

  /**
   * @public
   */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Social Interests',
      previousBtnLabel: 'Education'
    };
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this._saveInfo(getEmpReqPayload({
        data: event.value,
        empInfo: this.response,
        emailId: this.util.getQueryStringValue('uname')
      }));
      this.util.navigate('/interests');
    }
  }

  /**
   * @private
   */
  private _saveInfo(data: any): void {
    this.appraisal.init(this.appraisalId,'saveEmpInfo', null, {body: data})
      .subscribe(v => {
        console.log(v);
      });
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/education');
  }
}

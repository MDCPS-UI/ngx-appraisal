import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { getInsertPrtgReqPayload } from './ya-parenting';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';
import { ProfileService } from './../../shared/services/profile/profile.service';
import { AppraisalService } from './../../shared/services/appraisal/appraisal.service';
import { ActiveModelService } from '../../shared/services/active-model/active-model.service';


@Component({
  selector: 'mdcps-ya-parenting',
  templateUrl: './ya-parenting.component.html',
  styleUrls: ['./ya-parenting.component.scss']
})
export class YaParentingComponent implements OnInit {
  /**
   * @public
   */
  public config: any;

  /**
  * @public
  */
  public parentingForm: FormGroup;

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
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.parentingForm = this.fb.group({
      isPregnant: new FormControl('', []),
      isReceivingPrenatalCare: new FormControl('', []),
      isParent: new FormControl('', []),
      childNamesAndAges: new FormControl('', []),
      childrenLiveWithYou: new FormControl('', []),
      iHaveLegalCustody: new FormControl('', []),
      noLegalCustodyExplain: new FormControl('', []),
      missSchoolBecauseParenting: new FormControl('', []),
      hasHadInvestigation: new FormControl('', []),
      childrenHaveMedIssues: new FormControl('', []),
      childrenMedIssuesExplain: new FormControl('', []),
      haveMedicalInsurance: new FormControl('', []),
      receivingChildSupport: new FormControl('', []),
      childSupportAmount: new FormControl('', []),
      noChildSupportExplain: new FormControl('', []),
      payingChildSupport: new FormControl('', []),
      otherParentInvolved: new FormControl('', []),
      otherParentInvolvedExplain: new FormControl('', []),
      childrenInDaycare: new FormControl('', []),
      childrenRegularlyCaredFor: new FormControl('', []),
      payVoucher: new FormControl('', []),
      payOwnFunds: new FormControl('', []),
      payChildSupport: new FormControl('', []),
      payOutsideSource: new FormControl('', []),
      payNA: new FormControl('', [])
    });
  }

   /**
   * @private
   */
  private _init(): void {
    this.appraisalId = this.util.getQueryStringValue('appraisalId');

    this.appraisal.init(this.appraisalId, 'getParentingInfo')
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
      nextBtnLabel: 'Health',
      previousBtnLabel: 'Placement & Safety'
    };
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this._saveInfo(getInsertPrtgReqPayload({
        data: event.value,
        prtgInfo: this.response,
        emailId: this.util.getQueryStringValue('uname')
      }));
      this.util.navigate('/health');
    }
  }

  /**
   * @private
   */
  private _saveInfo(data: any): void {
    this.appraisal.init(this.appraisalId,'saveParentingInfo', null, {body: data})
      .subscribe(v => {
        console.log(v);
      });
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/placements');
  }
}

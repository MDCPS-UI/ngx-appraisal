import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { getInsertPersonalPayload } from './ya-personal';
import { YA_PERSONAL_LIST } from './ya-personal.constants';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';
import { ProfileService } from './../../shared/services/profile/profile.service';
import { AppraisalService } from './../../shared/services/appraisal/appraisal.service';
import { ActiveModelService } from '../../shared/services/active-model/active-model.service';


@Component({
  selector: 'mdcps-ya-personal',
  templateUrl: './ya-personal.component.html',
  styleUrls: ['./ya-personal.component.scss']
})
export class YaPersonalComponent implements OnInit {
  /**
   * @public
   */
  public config: any;
  /**
   * @public
   */
  public questions: any[] = [];
  /**
   * @public
   */
  public personalForm: FormGroup;

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

    this.questions = YA_PERSONAL_LIST;
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.personalForm = this.fb.group({
      supportInNext6Months: new FormGroup({
        isEducation: new FormControl('', []),
        isEmployment: new FormControl('', []),
        isParenting: new FormControl('', []),
        isMentalHealth: new FormControl('', []),
        isTransportation: new FormControl('', []),
        isMedical: new FormControl('', []),
        isOther: new FormControl('', []),
        otherText: new FormControl('', [])
      }),
      oneGoalSixMonths: new FormControl('', []),
      currentChallenges: new FormControl('', []),
      whatMotivatesYou: new FormControl('', []),
      supportLooksLike: new FormControl('', []),
      hasTransportation: new FormControl('', []),
      transportationKind: new FormControl('', []),
      transportationBarriers: new FormControl('', []),
      transportationPlans: new FormControl('', [])
    });
  }

  /**
   * @private
   */
  private _init(): void {
    this.appraisalId = this.util.getQueryStringValue('appraisalId');

    this.appraisal.init(this.appraisalId, 'getPersonalInfo')
      .subscribe(data => {
        this.response = data;
      });
  }

  /**
   * @public
   */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Received Documents',
      previousBtnLabel: 'Continuing Support/Services'
    };
  }

  /**
   * @public
   * @param {event<any>}
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this._saveInfo(getInsertPersonalPayload({
        data: event.value,
        personalInfo: this.response,
        emailId: this.util.getQueryStringValue('uname')
      }));
      this.util.navigate('/documents');
    }
  }

  /**
   * @private
   */
  private _saveInfo(data: any): void {
    this.appraisal.init(this.appraisalId, 'savePersonalInfo', null, {body: data})
      .subscribe(v => {
        console.log(v);
      });
  }

  /**
   * @public
   * @param {event<any>}
   */
  public onPrevious(event: any): void {
    this.util.navigate('/services');
  }
}

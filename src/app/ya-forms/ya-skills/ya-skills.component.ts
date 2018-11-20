import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { YA_SKILLS_LIST } from './ya-skills.constants';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';
import { ProfileService } from './../../shared/services/profile/profile.service';
import { AppraisalService } from './../../shared/services/appraisal/appraisal.service';
import { ActiveModelService } from '../../shared/services/active-model/active-model.service';

@Component({
  selector: 'mdcps-ya-skills',
  templateUrl: './ya-skills.component.html',
  styleUrls: ['./ya-skills.component.scss']
})
export class YaSkillsComponent implements OnInit {
  /**
   * @public
   */
  public config: any;

  /**
   * @public
   */
  public sections: any[];

  /**
   * @public
   */
  public skillsForm: FormGroup;

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
    this.skillsForm = this.fb.group({
      iCanUseEmailAccount: new FormControl('', []),
      iCanMakeMealsWithoutRecipe: new FormControl('', []),
      iCanDoMyOwnLaundry: new FormControl('', []),
      iCanGetMedicalDentalCareWhenNeeded: new FormControl('', []),
      iBatheDaily: new FormControl('', []),
      iBrushTeethDaily: new FormControl('', []),
      iCanGetAwayFromHarmfulSituations: new FormControl('', []),
      iCanSpeakUpForMyself: new FormControl('', []),
      iKnowSignsOfAbusiveRelationship: new FormControl('', []),
      iCanDealWithAnger: new FormControl('', []),
      iCanBalanceBankAccount: new FormControl('', []),
      iCanDevelopABudget: new FormControl('', []),
      iCanCreateAResume: new FormControl('', []),
      iCanCompleteAJobApplication: new FormControl('', []),
      iKnowHowToPrepareForInterview: new FormControl('', []),
      iCanDescribeVisionForMyself: new FormControl('', []),
      iKnowHowToDrive: new FormControl('', []),
      hasHadEducationalSupport: new FormControl('', []),
      hasHadEmploymentServices: new FormControl('', []),
      hasHadHealthCare: new FormControl('', []),
      hasHadMoneyManagement: new FormControl('', []),
      hasHadHousing: new FormControl('', []),
      hasHadAfterCare: new FormControl('', []),
      hasHadETV: new FormControl('', [])
    });

    this.sections = YA_SKILLS_LIST;
  }

  /**
   * @private
   */
  private _init(): void {
    this.appraisalId = this.util.getQueryStringValue('appraisalId');

    this.appraisal.init(this.appraisalId, 'getSkillsInfo')
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
      nextBtnLabel: 'Stipends',
      previousBtnLabel: 'Criminal Justice System'
    };
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this.util.navigate('/stipends');
      console.log(event.form.value);
    }
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/criminal');
  }

}

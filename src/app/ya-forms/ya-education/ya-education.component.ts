import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';

@Component({
  selector: 'mdcps-ya-education',
  templateUrl: './ya-education.component.html',
  styleUrls: ['./ya-education.component.scss']
})
export class YaEducationComponent implements OnInit {
  /**
   * @public
   */
  public config: any;

  /**
   * @public
   */
  public educationForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   * @param {util<UtilService>}
   */
  constructor(
    private fb: FormBuilder,
    private util: UtilService) {
    this.initFormConfig();
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.educationForm = this.fb.group({
      over18HighestEd: new FormControl('', []),
      past90Treatment: new FormControl('', []),
      isCurrentlyEnrolled: new FormControl('', []),
      isMiddleSchool: new FormControl('', []),
      isHighSchool: new FormControl('', []),
      isGED: new FormControl('', []),
      grade: new FormControl('', []),
      expectedTestDate: new FormControl('', []),
      isHomeSchool: new FormControl('', []),
      isVocational: new FormControl('', []),
      isOccupationalCertificate: new FormControl('', []),
      isPostSecondaryEducationalProgram: new FormControl('', []),
      pastYearSuspendExpel: new FormControl('', []),
      hasBIDPlan: new FormControl('', []),
      hasIEPRuling: new FormControl('', []),
      schoolIsWasteOfTime: new FormControl('', []),
      importantToMakeGoodGrades: new FormControl('', []),
      educationImporantForSuccess: new FormControl('', []),
      correctGradeForAge: new FormControl('', []),
      credits: new FormControl('', []),
      creditsNeeded: new FormControl('', []),
      notCurrectGradeExplain: new FormControl('', []),
      hasGradeA: new FormControl('', []),
      hasGradeB: new FormControl('', []),
      hasGradeC: new FormControl('', []),
      hasGradeD: new FormControl('', []),
      hasGradeF : new FormControl('', []),
      hasGradeNotSure: new FormControl('', []),
      hasGradeNoneAbove : new FormControl('', []),
      needHelpMath: new FormControl('', []),
      needHelpEnglish: new FormControl('', []),
      needHelpScience: new FormControl('', []),
      needHelpHistorySS: new FormControl('', []),
      needHelpLanguageArts: new FormControl('', []),
      needHelpOther: new FormControl('', []),
      needHelpOtherExplain: new FormControl('', []),
      passedStateLevelTests: new FormControl('', []),
      noPassAlgebraI: new FormControl('', []),
      noPassBiologyI: new FormControl('', []),
      noPassEnglishII: new FormControl('', []),
      noPassUSHistory: new FormControl('', []),
      ps_Grade: new FormControl('', []),
      ps_isEnrolledETV: new FormControl('', []),
      ps_lastETVFundDate: new FormControl('', []),
      ps_sixMonthA: new FormControl('', []),
      ps_sixMonthB: new FormControl('', []),
      ps_sixMonthC: new FormControl('', []),
      ps_sixMonthD: new FormControl('', []),
      ps_sixMonthF: new FormControl('', []),
      ps_sixMonthNotSure: new FormControl('', []),
      ps_sixMonthNoneAbove: new FormControl('', []),
      ps_needHelpMath: new FormControl('', []),
      ps_needHelpEnglish: new FormControl('', []),
      ps_needHelpScience: new FormControl('', []),
      ps_needHelpHistorySS: new FormControl('', []),
      ps_needHelpLangArts: new FormControl('', []),
      ps_needHelpOther: new FormControl('', []),
      ps_needHelpOtherText: new FormControl('', []),
      ps_whereEnrolled: new FormControl('', []),
      ps_enrollType: new FormControl('', []),
      ps_careerGoals: new FormControl('', []),
      expectedArea: new FormControl('', []),
      goalText: new FormControl('', []),
      tasks: new FormControl('', []),
      personResp: new FormControl('', []),
      progress: new FormControl('', []),
      completeDt: new FormControl('',[])
    });
  }

  /**
   * @public
   */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Employment',
      previousBtnLabel: 'Demographics'
    };
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this.util.navigate('/employment');
      console.log(event.form.value);
    }
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/demographics');
  }

}

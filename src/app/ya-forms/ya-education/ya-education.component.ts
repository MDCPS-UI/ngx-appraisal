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
      ce_HighestLevel: new FormControl('', []),
      ce_CurrentlyEnrolled: new FormControl('', []),
      ce_WhereEnrolled: new FormControl('', []),
      CE_GradeMiddle   : new FormControl('', []),
      CE_GradeHigh: new FormControl('', []),
      ce_HasIEPRuling: new FormControl('', []),
      ce_CreditsNeeded: new FormControl('', []),
      ce_CurrentCredits: new FormControl('', []),
      ce_CorrectGrade: new FormControl('', []),
      ce_CorrectGradeReason: new FormControl('', []),
      gradesLastSix: new FormControl('', []),
      subjectNeedsHelp: new FormControl('', []),
      otherHelpNeeded: new FormControl('', []),
      ce_PassedStateTests: new FormControl('', []),
      testsNotPassed: new FormControl('', []),
      ce_IsDualEnrollment : new FormControl('', []),
      ce_DualEnrollmentType: new FormControl('', []),
      ce_IsGED : new FormControl('', []),
      ce_GEDProgress: new FormControl('', []),
      ce_ExpectedTestDate: new FormControl('', []),
      ce_IsHighSchoolVocational: new FormControl('', []),
      occupationalCert: new FormControl('', []),
      postSecondary: new FormControl('', []),
      postSecType: new FormControl('', []),
      etv_IsEnrolled: new FormControl('', []),
      etvGrades: new FormControl('', []),
      etv_LastReceiveFunds: new FormControl('', []),
      etvSubjectHelp: new FormControl('', []),
      etvOtherHelp: new FormControl('', []),
      etvWhereEnrolled: new FormControl('', []),
      etvEnrollType: new FormControl('', []),
      careerGoals: new FormControl('', []),
      opinionWaste: new FormControl('', []),
      opinionLearning: new FormControl('', []),
      opinionTests: new FormControl('', []),
      opinionFinishWork: new FormControl('', []),
      opinionGrades: new FormControl('', []),
      opinionGoingSchool: new FormControl('', []),
      opinionConcentration: new FormControl('', []),
      opinionEducation: new FormControl('', []),
      plannedAttendance: new FormControl('', []),
      plannedAttendanceOther: new FormControl('', []),
      attendanceNotApplicable: new FormControl('', []),
      expectedAreaOfStudy: new FormControl('', [])
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

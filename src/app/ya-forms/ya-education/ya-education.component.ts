import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';

/**
 * @author: Shoukath Mohammed
 */
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
      highestEducationLevel: new FormControl('', []),
      currentlyEnrolled: new FormControl('', []),
      currentlyEnrolledAt: new FormControl('', []),
      currentMiddleSchoolGrade: new FormControl('', []),
      currentHighSchoolGrade: new FormControl('', []),
      IEPruling: new FormControl('', []),
      creditsToGraduate: new FormControl('', []),
      currentCredits: new FormControl('', []),
      correctGrade: new FormControl('', []),
      notCorrectGrade: new FormControl('', []),
      gradesLastSix: new FormControl('', []),
      subjectNeedsHelp: new FormControl('', []),
      otherHelpNeeded: new FormControl('', []),
      stateLevelTests: new FormControl('', []),
      testsNotPassed: new FormControl('', []),
      dualEnrollment: new FormControl('', []),
      dualEnrollmentTypes: new FormControl('', []),
      ged: new FormControl('', []),
      gedProgress: new FormControl('', []),
      gedExpectedTestDate: new FormControl('', []),
      vocational: new FormControl('', []),
      occupationalCert: new FormControl('', []),
      postSecondary: new FormControl('', []),
      postSecType: new FormControl('', []),
      etv: new FormControl('', []),
      etvGrades: new FormControl('', []),
      etvFundsDate: new FormControl('', []),
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
      previousBtnLabel: 'Housing'
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
    this.util.navigate('/housing');
  }

}

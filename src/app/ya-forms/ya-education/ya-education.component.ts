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
      diplomaStatus: new FormControl('', []),
      grade: new FormControl('', []),
      correctGrade: new FormControl('', []),
      notCorrectGrade: new FormControl('', []),
      duelEnrollment: new FormControl('', []),
      duelEnrollmentExplain: new FormControl('', []),
      ged: new FormControl('', []),
      gedProgress: new FormControl('', []),
      gedExpectedTestDate: new FormControl('', []),
      vocoational: new FormControl('', []),
      occupationalCert: new FormControl('', []),
      postSecondary: new FormControl('', []),
      postSecYear: new FormControl('', []),
      postSecType: new FormControl('', []),
      etv: new FormControl('', []),
      fundsDate: new FormControl('', []),
      eductionEnrolled: new FormControl('', []),
      highestEducation: new FormControl('', []),
      goals: new FormControl('', []),
      plannedAttendance: new FormControl('', []),
      plannedAttendanceNotApplicable: new FormControl('', []),
      plannedAttendanceOther: new FormControl('', []),
      expectedAreaOfStudy: new FormControl('', []),
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

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-education',
  templateUrl: './ya-education.component.html',
  styleUrls: ['./ya-education.component.scss']
})
export class YaEducationComponent implements OnInit {

 /**
   * @public
   */
  public educationForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
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
  public onSubmit(event: any): void {
    if (event.form && event.form.valid) {
      console.log(event.form.value);
    }
  }

}

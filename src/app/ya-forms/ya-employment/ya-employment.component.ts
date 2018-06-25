import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-employment',
  templateUrl: './ya-employment.component.html',
  styleUrls: ['./ya-employment.component.scss']
})
export class YaEmploymentComponent implements OnInit {

  /**
   * @public
   */
  public employmentForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employmentForm = this.fb.group({
      workDisabled: new FormControl('', []),
      explainWorkDisabled: new FormControl('', []),
      heldJob: new FormControl('', []),
      jobSkills: new FormControl('', []),
      otherJobSkills: new FormControl('', []),
      employed: new FormControl('', []),
      evictedHowlong: new FormControl('', []),
      inBenefitProgram: new FormControl('', []),
      hourlyRate: new FormControl('', []),
      otherHourlyRate: new FormControl('', [])
    })
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

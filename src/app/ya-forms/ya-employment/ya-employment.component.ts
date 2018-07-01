import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../shared/services/util/util.service';
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
  public config: any;

  /**
   * @public
   */
  public employmentForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder,
              private util: UtilService) {
              this.initFormConfig();
     }

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
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Social Interests',
      previousBtnLabel: 'Education'
    }
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this.util.navigate('/interests');
      console.log(event.form.value);
    }
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/education');
  }

}

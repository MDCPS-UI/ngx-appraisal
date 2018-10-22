import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';

 
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
  constructor(
    private fb: FormBuilder,
    private util: UtilService) {
    this.initFormConfig();
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.employmentForm = this.fb.group({
      isDisabled: new FormControl('', []),
      isDisabledSSI: new FormControl('', []),
      isDisabledSSA: new FormControl('', []),
      isDisabilityNone: new FormControl('', []),
      disabilityExplain: new FormControl('', []),
      hasHadJob: new FormControl('', []),
      hasChildCare: new FormControl('', []),
      hasFoodServices: new FormControl('', []),
      hasHealthCare: new FormControl('', []),
      hasClerical: new FormControl('', []),
      hasMechanical: new FormControl('', []),
      hasElectrical: new FormControl('', []),
      hasSales: new FormControl('', []),
      hasCustService: new FormControl('', []),
      hasOther: new FormControl('', []),
      hasOtherExplain: new FormControl('', []),
      employmentType: new FormControl('', []),
      employmentLength: new FormControl('', []),
      enrolledEmpBenefit: new FormControl('', []),
      hourlyPayRate: new FormControl('', []),
      hourlyPayOtherExplain: new FormControl('', [])
    });
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
    };
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

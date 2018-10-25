import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';


@Component({
  selector: 'mdcps-ya-housing',
  templateUrl: './ya-housing.component.html',
  styleUrls: ['./ya-housing.component.scss']
})
export class YaHousingComponent implements OnInit {
  /**
   * @public
   */
  public config: any;

  /**
   * @public
   */
  public housingForm: FormGroup;

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
    this.housingForm = this.fb.group({
      housingPlan: new FormControl('', []),
      housingSituation: new FormControl('', []),
      currentHousingLength: new FormControl('', []),
      hasBeenHomeless: new FormControl('', []),
      homelessLength: new FormControl('', []),
      hasBeenEvicted: new FormControl('', []),
      evictedLength: new FormControl('', []),
      meetMonthlyObligations: new FormControl('', []),
      monthlyObligationsText: new FormControl('', [])
    });
  }

  /**
   * @public
   */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Placement & Safety',
      previousBtnLabel: 'Social Interests'
    };
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this.util.navigate('/placements');
      console.log(event.form.value);
    }
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/interests');
  }
}

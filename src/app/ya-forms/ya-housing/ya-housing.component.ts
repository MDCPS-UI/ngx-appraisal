import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../shared/services/util/util.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

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
   */
  constructor(private fb: FormBuilder,
              private util: UtilService) {
              this.initFormConfig();
     }

  ngOnInit() {
    this.housingForm = this.fb.group({
      housingStatus: new FormControl('', []),
      timeInCurrentHousing: new FormControl('', []),
      homelessStatus: new FormControl('', []),
      homelessHowlong: new FormControl('', []),
      evictedStatus: new FormControl('', []),
      evictedhowlong: new FormControl('', []),
      meetMonthlyReq: new FormControl('', []),
      obligations: new FormControl('', [])
    });
  }

  /**
   * @public
   */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Education',
      previousBtnLabel: 'Demographics'
    }
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this.util.navigate('/education');
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

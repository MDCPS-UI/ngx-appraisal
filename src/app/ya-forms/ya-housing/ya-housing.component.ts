import { Component, OnInit } from '@angular/core';
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
  public housingForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

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
  public onSubmit(event: any): void {
    if (event.form && event.form.valid) {
      console.log(event.form.value);
    }
  }

}

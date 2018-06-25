import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'mdcps-ya-stipends',
  templateUrl: './ya-stipends.component.html',
  styleUrls: ['./ya-stipends.component.scss']
})
export class YaStipendsComponent implements OnInit {

  /**
   * @public
   */
  public stipendsForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.stipendsForm = this.fb.group({
      seniorYearStipendRequested: new FormControl('', []),
      seniorYearStipendRequestedOther: new FormControl('', []),
      seniorStipendRequestDate: new FormControl('', []),
      graduationYearStipendRequested: new FormControl('', []),
      graduationYearStipendRequestedOther: new FormControl('', []),
      graduationStipendRequestDate: new FormControl('', []),
      collegeBoundStipendRequested: new FormControl('', []),
      collegeBoundStipendRequestedOther: new FormControl('', []),
      collegeBoundStipendRequestDate: new FormControl('', []),
      startUpStipendRequested: new FormControl('', []),
      startUpStipendRequestedOther: new FormControl('', []),
      startUpStipendRequestDate: new FormControl('', [])
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

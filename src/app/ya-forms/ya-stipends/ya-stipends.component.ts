import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../shared/services/util/util.service';
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
  public config: any;

  /**
   * @public
   */
  public stipendsForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder,
              private util: UtilService) {
                this.initFormConfig();
               }

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
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Continuing Support/Services',
      previousBtnLabel: 'Life SKills'
    }
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this.util.navigate('/services');
      console.log(event.form.value);
    }
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/skills');
  }

}

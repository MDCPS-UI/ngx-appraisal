import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-youth-appraisal',
  templateUrl: './youth-appraisal.component.html',
  styleUrls: ['./youth-appraisal.component.scss']
})
export class YouthAppraisalComponent implements OnInit {

  /**
   * @public
   */
  public youthApprForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.youthApprForm = this.fb.group({
      youthName: new FormControl('', []),
      youthId: new FormControl('', []),
      appraisalDate: new FormControl('', []),
      status: new FormControl('', []),
    });
  }

  /**
   * @public
   */
  public onSubmit(form: FormGroup, value: any): void {
    if (form.valid) {
      console.log(form.value);
    }
  }
}

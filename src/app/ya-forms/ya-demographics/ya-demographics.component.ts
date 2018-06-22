import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-demographics',
  templateUrl: './ya-demographics.component.html',
  styleUrls: ['./ya-demographics.component.scss']
})
export class YaDemographicsComponent implements OnInit {

  /**
   * @public
   */
  public demographicsForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.demographicsForm = this.fb.group({
      dateOfBirth: new FormControl('', []),
      age: new FormControl('', []),
      phone: new FormControl('', []),
      email: new FormControl('', []),
      permenancygoal: new FormControl('', []),
      custodystatus: new FormControl('', []),
      dischargeDate: new FormControl('', []),
      address: new FormControl('', []),
      race: new FormControl('', []),
      gender: new FormControl('', []),
      LGBTQ: new FormControl('', []),
      COR: new FormControl('', []),
      COS: new FormControl('', []),
      healthInsurance: new FormControl('', []),
      medicaid: new FormControl('', []),
      languageBarriers: new FormControl('', []),
      explainLanguageBarriers: new FormControl('', []),
      mentor: new FormControl('', []),
      transitionplanning: new FormControl('', []),
      corWorker: new FormControl('', [])
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

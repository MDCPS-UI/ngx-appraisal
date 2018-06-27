import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ProfileService } from '../../shared/services/profile/profile.service';

/**
 * @author: Shoukath Mohammed
 */
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
  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService) { }

  public ngOnInit(): void {
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

    // listen to youth appraisal selection
    this.subscribeToYaSelection();
  }

  /**
   * @public
   */
  public subscribeToYaSelection(): void {
    this.profileService.getYaSelection()
    .subscribe(selection => {
      if (selection) {
        const form: FormGroup = this.demographicsForm;
        form.get('email').setValue(selection.Email);
        form.get('dateOfBirth').setValue(selection.DOBString);

        // update the demographics form
        this.demographicsForm.updateValueAndValidity();
      }
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

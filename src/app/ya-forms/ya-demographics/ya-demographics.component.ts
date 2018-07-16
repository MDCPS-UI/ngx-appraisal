import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from '../../shared/services/util/util.service';
import { ProfileService } from '../../shared/services/profile/profile.service';
import { YA_DG_NAVG_LIST, YA_DG_GENDER_LIST } from './ya-demographics.constants';

@Component({
  selector: 'mdcps-ya-demographics',
  templateUrl: './ya-demographics.component.html',
  styleUrls: ['./ya-demographics.component.scss']
})
export class YaDemographicsComponent implements OnInit {
  /**
   * @public
   */
  public config: any = {};

  /**
   * @public
   */
  public demographicsForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   * @param {util<UtilService>}
   * @param {profileService<ProfileService>}
   */
  constructor(
    private fb: FormBuilder,
    private util: UtilService,
    private profileService: ProfileService) {

    // navigator list
    this.config.navgList = YA_DG_NAVG_LIST;
    this.config.gendersList = YA_DG_GENDER_LIST;
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.demographicsForm = this.fb.group({
      dateOfBirth: new FormControl('', []),
      age: new FormControl('', []),
      phone: new FormControl('', []),
      email: new FormControl('', []),
      permanencygoal: new FormControl('', []),
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
      corWorker: new FormControl('', []),
      transitionNavigator: new FormControl('', [])
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
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      //this.util.navigate('/education');
      console.log(event.form.value);
    }
    this.util.navigate('/education');
  }
}

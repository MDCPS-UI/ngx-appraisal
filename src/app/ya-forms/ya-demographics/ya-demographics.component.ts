import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';
import { ProfileService } from './../../shared/services/profile/profile.service';
import { AppraisalService } from './../../shared/services/appraisal/appraisal.service';
import { YA_DG_NAVG_LIST, YA_DG_GENDER_LIST, DMG_FIELDS } from './ya-demographics.constants';

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
    private appraisal: AppraisalService,
    private profileService: ProfileService) {

    // navigator list
    this.config.navgList = YA_DG_NAVG_LIST;
    this.config.gendersList = YA_DG_GENDER_LIST;

    this._init();
  }

  /**
   * @public
   */
  public ngOnInit(): void {
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
          form.get('dob').setValue(selection.DOBString);

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
      console.log(event.form.value);
    }
    this.util.navigate('education');
  }

  /**
   * @public
   */
  public getControl(name: string): any {
    return _.find(DMG_FIELDS, {controlName: name});
  }

  /**
   * @private
   */
  private _init(): void {
    const appraisalId: string = this.util.getQueryStringValue('appraisalId');

    this.appraisal.init(appraisalId, 'getDmgInfo')
    .subscribe(data => {
      if (!!data) {
        this._process(data);
      }
    });
  }

  /**
   * @private
   */
  // private _build(): void {
  //   this.demographicsForm = this.fb.group({});
  // }

  /**
   * @private
   */
  private _process(data: any): void {
    const controls: any[] = DMG_FIELDS;

    const form: any = {};
    for (const control of controls) {
      form[control.controlName] = new FormControl(
        {
          disabled: control.isDisabled,
          value: this._get(data, control.controlName)
        }, control.validators
      )
    }

    this.demographicsForm = this.fb.group(form);
  }

  /**
   * @private
   */
  private _get(data: any, key: string): any {
    return data[key] || '';
  }
}

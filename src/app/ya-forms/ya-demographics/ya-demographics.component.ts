import * as _ from 'lodash';
import { forkJoin } from "rxjs/observable/forkJoin";
import { getInsertDmgReqPayload } from './ya-demographics';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';
import { ProfileService } from './../../shared/services/profile/profile.service';
import { AppraisalService } from './../../shared/services/appraisal/appraisal.service';
import { YA_DG_NAVG_LIST, YA_DG_GENDER_LIST, DMG_FIELDS } from './ya-demographics.constants';
import { ActiveModelService } from '../../shared/services/active-model/active-model.service';

@Component({
  selector: 'mdcps-ya-demographics',
  templateUrl: './ya-demographics.component.html',
  styleUrls: ['./ya-demographics.component.scss']
})
export class YaDemographicsComponent implements OnInit, AfterViewInit {
  /**
   * @public
   */
  public config: any = {};

  /**
   * @public
   */
  public appraisalId: string;

  /**
   * @public
   */
  public responses: any = {};

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
    private profileService: ProfileService,
    private activeModel: ActiveModelService) {

    // navigator list
    this.config.navgList = YA_DG_NAVG_LIST;
    this.config.gendersList = YA_DG_GENDER_LIST;

    this._init();
  }

  /**
   * @public
   */
  public ngOnInit(): void {}

  /**
   * @public
   */
  public ngAfterViewInit(): void {
    // listen to youth appraisal selection
    this.subscribeToYaSelection();
  }

  /**
   * @public
   */
  public subscribeToYaSelection(): void {
    this.profileService.getYaSelection()
      .subscribe(selection => {
        const form: FormGroup = this.demographicsForm;

        if (selection && form) {
          form.get('email').setValue(selection.Email);
          form.get('dob').setValue(selection.dobString);

          // update the demographics form
          this.demographicsForm.updateValueAndValidity();
        }
      });
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    // if (event.form && event.form.valid) {
    //   console.log(event.form.value);
    // }
    this._saveInfo(getInsertDmgReqPayload({
      data: event.value,
      dmgInfo: this.responses['dmg'],
      emailId: this.util.getQueryStringValue('uname')
    }));

    this.util.navigate('education');
  }

  /**
   * @private
   */
  private _saveInfo(data: any): void {
    this.appraisal.init(this.appraisalId,'saveDmgInfo', null, {body: data})
      .subscribe(v => {
        console.log(v);
      });
  }

  /**
   * @public
   */
  public getControl(name: string): any {
    return _.find(DMG_FIELDS, { controlName: name });
  }

  /**
   * @public
   */
  public compare(val1: any, val2: any): boolean {
    return (val1 == val2) || (_.get(val1, 'id') == _.get(val2, 'id'));
  }

  /**
   * @private
   */
  private _init(): void {
    this.appraisalId = this.util.getQueryStringValue('appraisalId')

      // services to call concurrently
      const getCounties: any = this.appraisal.request('getCounties')
      , getNavWorkers: any = this.appraisal.request('getNavWorkers')
      , getAllWorkers: any = this.appraisal.request('getAllWorkers')
      , getDmgInfo: any = this.appraisal.init(this.appraisalId, 'getDmgInfo');

    forkJoin([getCounties, getNavWorkers, getAllWorkers, getDmgInfo])
      .subscribe(data => {
        this.responses['counties'] = data[0];
        this.responses['navWorkers'] = data[1];
        this.responses['allWorkers'] = data[2];

        if (!!data[3]) {
          this._process(data[3]);
          this.responses['dmg'] = data[3];
        }

        // setting the responses so it can be retrieved
        this.activeModel.setResponse(this.responses, null, true);
      });
  }

  /**
   * @private
   */
  private _process(data: any): void {
    const controls: any[] = DMG_FIELDS;

    const form: any = {};
    for (const control of controls) {

      let val: any = (control.controlName == 'addressList')
        ? this._getAddress(this._get(data, control.controlName, control))
        : this._get(data, control.controlName, control);

      form[control.controlName] = new FormControl(
        {
          disabled: control.isDisabled,
          value: val
        },
        control.validators
      )
    }

    const state: string = (form['custodyStatus'].value)
      ? 'disable'
      : 'enable';

    this.setState(state, form);
    this.demographicsForm = this.fb.group(form);
  }

  /**
   * @private
   */
  private setState(action: string, form: any): void {
    const fields: string[] = [
      'phone', 'email', 'hasMedicaid', 'corWorker'
    ];

    _.each(fields, (field) => {
        form[field][action]();
    });
  }

  /**
   * @private
   */
  private _get(data: any, key: string,  control: any): any {
    let val: any;

    if (control && control['isBool']) {
      val = data[key] || false;
    } else {
      val = data[key] || '';
    }
    return val;
  }

  /**
   * @private
   */
  private _getAddress(list: any): string {
    if (!list) { return ''; }

    let addressStr: string = '';
    for (const address of list) {
      addressStr +=
        address.line1 + ',\n' +
        address.line2 + ',\n' +
        address.city + ',' + address.state + ' ' + address.zip + '\n' +
        '\n';
    }
    return addressStr;
  }
}

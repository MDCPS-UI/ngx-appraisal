import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { getInsertCriminalInfoReqPayload } from './ya-criminal';
import { YA_CRMNL_LIST } from './ya-criminal.constants';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';
import { ProfileService } from './../../shared/services/profile/profile.service';
import { AppraisalService } from './../../shared/services/appraisal/appraisal.service';
import { ActiveModelService } from '../../shared/services/active-model/active-model.service';

@Component({
  selector: 'mdcps-ya-criminal',
  templateUrl: './ya-criminal.component.html',
  styleUrls: ['./ya-criminal.component.scss']
})
export class YaCriminalComponent implements OnInit {
  /**
   * @public
   */
  public config: any;

  /**
   * @public
   */
  public criminalQuesList: any[] = [];

  /**
   * @public
   */
  public criminalForm: FormGroup;

  /**
   * @public
   */
  public appraisalId: string;


  /**
   * @public
   */
  public response: any = {};

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   * @param {util<UtilService>}
   */
  constructor(
    private fb: FormBuilder,
    private util: UtilService,
    private appraisal: AppraisalService,
    private profileService: ProfileService,
    private activeModel: ActiveModelService) {
    this.initFormConfig();
    this._init();
    this.criminalQuesList = YA_CRMNL_LIST;
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.criminalForm = this.fb.group({
      hasBeenArrested: new FormControl('', []),
      hasBeenConvicted: new FormControl('', []),
      hasCurrentWarrant: new FormControl('', []),
      isOnProbation: new FormControl('', []),
      hasLegalRepresentation: new FormControl('', []),
      isOnParole: new FormControl('', []),
      hasOpenCase: new FormControl('', []),
      isFreeOnBond: new FormControl('', []),
      hasGangActivity: new FormControl('', []),
      gangActivityText: new FormControl('', []),
      possessWeapon: new FormControl('', [])
    });
  }

  /**
   * @private
   */
  private _init(): void {
    this.appraisalId = this.util.getQueryStringValue('appraisalId');

    this.appraisal.init(this.appraisalId, 'getCriminalInfo')
      .subscribe(data => {

        if (!!data) {
          this._process(data);
          this.response = data;
        }
      });

      // setting the responses so it can be retrieved
      this.activeModel.setResponse(this.response, null, true);
  }

  /**
   * @private
   */
  private _process(data: any): void {

    const options: any[] = YA_CRMNL_LIST;

    const form: any = {};
    for (const option of options) {

      const val: any = this._get(data, option.optionName, option);

      form[option.optionName] = new FormControl(
        {
          disabled: option.isDisabled,
          value: val
        },
        option.validators
      );
    }
    this.criminalForm = this.fb.group(form);

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
   * @public
   */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Life Skills',
      previousBtnLabel: 'Relationships'
    };
  }

  /**
   * @public
   */
  public onNext(event: any): void {

    this._saveInfo(getInsertCriminalInfoReqPayload({
      data: event.value,
      criminalInfo: this.response,
      emailId: this.util.getQueryStringValue('uname')
    }));

    this.util.navigate('/skills');
  }

  /**
   * @private
   */
  private _saveInfo(data: any): void {
    this.appraisal.init(this.appraisalId, 'saveCriminalInfo', null, {body: data})
      .subscribe(v => {
        console.log(v);
      });
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/relationships');
  }
}

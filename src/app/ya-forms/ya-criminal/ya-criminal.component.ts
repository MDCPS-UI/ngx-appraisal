import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
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
        this.response = data;
      })
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
    if (event.form && event.form.valid) {
      this.util.navigate('/skills');
      console.log(event.form.value);
    }
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/relationships');
  }
}

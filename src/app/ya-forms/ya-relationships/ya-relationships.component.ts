import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { YA_RELSHP_LIST } from './ya-relationships.constants';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';
import { ProfileService } from './../../shared/services/profile/profile.service';
import { AppraisalService } from './../../shared/services/appraisal/appraisal.service';
import { ActiveModelService } from '../../shared/services/active-model/active-model.service';

@Component({
  selector: 'mdcps-ya-relationships',
  templateUrl: './ya-relationships.component.html',
  styleUrls: ['./ya-relationships.component.scss']
})
export class YaRelationshipsComponent implements OnInit {
  /**
   * @public
   */
  public config: any;

  /**
   * @public
   */
  public relQuesList: any[] = [];

  /**
   * @public
   */
  public relationshipForm: FormGroup;

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

    this.relQuesList = YA_RELSHP_LIST;
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.relationshipForm = this.fb.group({
      abusivePartner: new FormGroup({
        isPartnerAbusiveVerbal: new FormControl(false, []),
        isPartnerAbusiveEmotional: new FormControl(false, []),
        isPartnerAbusivePhysical: new FormControl(false, [])
      }),
      isInRelationship: new FormControl('', []),
      currentlyLeavingRelationship: new FormControl('', []),
      forcedSexAgainstMe: new FormControl('', []),
      forcedSexAgainstOther: new FormControl('', []),
      isAfraidOfPartner: new FormControl('', []),
      isCurrentProstitution: new FormControl('', []),
      hasReceivedGoodsForSex: new FormControl('', [])
    })
  }

  /**
   * @private
   */
  private _init(): void {
    this.appraisalId = this.util.getQueryStringValue('appraisalId');

    this.appraisal.init(this.appraisalId, 'getRelationInfo')
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
      nextBtnLabel: 'Criminal Justice System',
      previousBtnLabel: 'Health'
    }
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this.util.navigate('/criminal');
      console.log(event.form.value);
    }
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/health');
  }
}

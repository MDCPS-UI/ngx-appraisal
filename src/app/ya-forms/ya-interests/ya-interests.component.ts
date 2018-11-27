import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { getInterestsReqPayload } from './ya-interests';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';
import { ProfileService } from './../../shared/services/profile/profile.service';
import { AppraisalService } from './../../shared/services/appraisal/appraisal.service';
import { ActiveModelService } from '../../shared/services/active-model/active-model.service';



@Component({
  selector: 'mdcps-ya-interests',
  templateUrl: './ya-interests.component.html',
  styleUrls: ['./ya-interests.component.scss']
})
export class YaInterestsComponent implements OnInit {
  /**
   * @public
   */
  public config: any;

  /**
    * @public
    */
  public interestsForm: FormGroup;

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
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.interestsForm = this.fb.group({
      isInvolved: new FormControl('', []),
      dance: new FormControl('', []),
      cheerleading: new FormControl('', []),
      choirChorus: new FormControl('', []),
      band: new FormControl('', []),
      dramaTheater: new FormControl('', []),
      baseball: new FormControl('', []),
      softball: new FormControl('', []),
      football: new FormControl('', []),
      soccer: new FormControl('', []),
      track: new FormControl('', []),
      golf: new FormControl('', []),
      basketball: new FormControl('', []),
      swimming: new FormControl('', []),
      other: new FormControl('', []),
      otherExplain: new FormControl('', []),
      participatesReligion: new FormControl('', []),
      religionOtherExplain: new FormControl('', []),
      hasClubsHobbies: new FormControl('', []),
      clubsHobbies: new FormControl('', []),
      listhobbies: new FormControl('', [])
    });
  }

  /**
   * @private
   */
  private _init(): void {
    this.appraisalId = this.util.getQueryStringValue('appraisalId');

    this.appraisal.init(this.appraisalId, 'getSocialInfo')
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
      nextBtnLabel: 'Housing',
      previousBtnLabel: 'Employment'
    };
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this._saveInfo(getInterestsReqPayload({
        data: event.value,
        intrInfo: this.response,
        emailId: this.util.getQueryStringValue('uname')
      }));
      this.util.navigate('/housing');
    }
  }

   /**
   * @private
   */
  private _saveInfo(data: any): void {
    this.appraisal.init(this.appraisalId,'saveSocialInfo', null, {body: data})
      .subscribe(v => {
        console.log(v);
      });
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/employment');
  }

}

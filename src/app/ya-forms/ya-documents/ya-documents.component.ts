import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { getInsertDocReqPayload } from './ya-documents';
import { YA_DOCS_LIST } from './ya-documents.constants';
import { UtilService } from './../../shared/services/util/util.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from './../../shared/services/profile/profile.service';
import { AppraisalService } from './../../shared/services/appraisal/appraisal.service';
import { ActiveModelService } from '../../shared/services/active-model/active-model.service';

@Component({
  selector: 'mdcps-ya-documents',
  templateUrl: './ya-documents.component.html',
  styleUrls: ['./ya-documents.component.scss']
})
export class YaDocumentsComponent implements OnInit {
  /**
   * @public
   */
  public config: any;
  /**
   * @public
   */
  public documentsList: any[];

  /**
   * @public
   */
  public documentsForm: FormGroup;

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
    this.documentsList = YA_DOCS_LIST;
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    // construct & initialize the form
    this.initFormConfig();
    this.initDocumentsForm();
    this._init();
  }

  /**
   * @private
   */
  private _init(): void {
    this.appraisalId = this.util.getQueryStringValue('appraisalId');

    this.appraisal.init(this.appraisalId, 'getDocumentInfo')
      .subscribe(data => {
        this.response = data;
      })
  }

  /**
   * @public
   */
  public initDocumentsForm(): void {
    const group: any = {};
    const fields: any[] = [...this.documentsList];

    // dynamically construct the form fields
    _.each(fields, (field) => {
      group[field.inputName] = new FormControl('', []);
      group[field.optionName] = new FormControl(true, []);
    });

    // initialize the form
    this.documentsForm = this.fb.group(group);
  }

  /**
   * @public
   * @param {event<any>}
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this._saveInfo(getInsertDocReqPayload({
        data: event.value,
        docInfo: this.response,
        emailId: this.util.getQueryStringValue('uname')
      }));
    }
    this.util.navigate('/review');
  }

  /**
   * @private
   */
  private _saveInfo(data: any): void {
    this.appraisal.init(this.appraisalId,'saveDocumentInfo', null, {body: data})
      .subscribe(v => {
        console.log(v);
      });
  }

  /**
   * @public
   * @param {event<any>}
   */
  public onPrevious(event: any): void {
    this.util.navigate('/personal');
  }

  /**
   * @public
   */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Review & Sign',
      previousBtnLabel: 'Personal'
    };
  }

  /**
   * @public
   */
  public onToggle(e: any, fieldName: string): void {
    if (e && fieldName) {
      const field: FormControl = <FormControl>this.documentsForm.get(fieldName);

      if (e.checked) {
        field.setValidators([Validators.required]);
      } else {
        field.clearValidators();
      }
      field.updateValueAndValidity();
    }
  }
}

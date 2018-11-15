import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { YA_DOCS_LIST } from './ya-documents.constants';
import { UtilService } from './../../shared/services/util/util.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
   * @constructor
   * @param {fb<FormBuilder>}
   * @param {util<UtilService>}
   */
  constructor(
    private fb: FormBuilder,
    private util: UtilService) {
    this.documentsList = YA_DOCS_LIST;
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    // construct & initialize the form
    this.initFormConfig();
    this.initDocumentsForm();
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

      console.log(event.form.value);
    }
    this.util.navigate('/review');
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

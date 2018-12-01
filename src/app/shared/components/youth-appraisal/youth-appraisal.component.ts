import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ProfileService } from './../../services/profile/profile.service';
import { AppraisalService } from '../../services/appraisal/appraisal.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActiveModelService } from './../../services/active-model/active-model.service';

@Component({
  selector: 'mdcps-youth-appraisal',
  templateUrl: './youth-appraisal.component.html',
  styleUrls: ['./youth-appraisal.component.scss']
})
export class YouthAppraisalComponent implements OnInit {
  /**
   * @public
   */
  public children: any;
  /**
   * @public
   */
  public youthApprForm: FormGroup;

  /**
   * @public
   */
  @Input()
  public preset: boolean = false;

  /**
   * @public
   */
  public typeaheadLength: number = 3;

  /**
   * @public
   */
  public isProcessing: boolean = false;

  /**
   * @public
   */
  @Input()
  public enableButton: boolean = false;

  /**
   * @public
   */
  @Output()
  public formSubmit: EventEmitter<any> = new EventEmitter<any>();

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(
    private fb: FormBuilder,
    private appraisal: AppraisalService,
    private profileService: ProfileService,
    private activeModel: ActiveModelService) {
    this.getChildren();
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.youthApprForm = this.fb.group({
      status: new FormControl('', []),
      macwisId: new FormControl('', []),
      youthName: new FormControl('', []),
      appraisalDate: new FormControl('', [])
    });

    if (this.preset) {
      this.prePopulate();
    }
  }

  /**
   * @public
   */
  public search(text$: Observable<string>): any {
    return text$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      map(term => {
        const results: any[] = !(term.length < this.typeaheadLength)
          ? this.children.filter(child => {
            const macId: string = (child.macwisId || '');
            return macId && macId.indexOf(term) > -1;
          })
          : [];

        this.isProcessing = false;
        return results;
      })
    );
  }

  /**
   * @public
   */
  public onSearch(e: MouseEvent): void {
    if (e && (<any>e.target).value
      && (<any>e.target).value.length == this.typeaheadLength) {
      this.isProcessing = true;
    } else {
      this.isProcessing = false;
    }
  }

  /**
   * @public
   */
  public formatter(selection: any): string {
    return selection.macwisId;
  };

  /**
   * @public
   */
  public populateForm(data: any): void {
    this.youthApprForm.setValue({
      macwisId: data,
      appraisalDate: Date.now(),
      youthName: `${data.firstName} ${data.lastName}`,
      status: (data.isActive) ? 'Active' : 'Inactive'
    });

    // update form values
    this.youthApprForm.updateValueAndValidity();
  }

  /**
   * @public
   */
  public prePopulate(): void {
    const selection: any = this.profileService.getItem('appraisal') || {};
    const macId: any = selection['macwisId'];

    if (selection && macId) {
      this.populateForm(macId);
      this.profileService.setYaSelection(macId);
    }
  }

  /**
   * @public
   */
  public onSelect(e: any): void {
    this.profileService.setYaSelection(e.item);
    this.populateForm(e.item);
  }

  /**
   * @public
   */
  public onSubmit(form: FormGroup, value: any): void {
    this.formSubmit.emit({
      form: form,
      formValue: value,
      isFormValid: form.valid
    });
  }

  /**
   * @public
   */
  public getChildren(): void {
    const children: any = this.activeModel.getChildren();

    if (!!children) {
      this.children = children;
      return;
    }

    this.appraisal.request('getAllChildren')
    .subscribe(
      (data) => {
        this.children = data;
        this.activeModel.setChildren(data);
      }
    )
  }
}

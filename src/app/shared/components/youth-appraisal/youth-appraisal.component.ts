import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { YA_CHILDREN_DATA } from './youth-appraisal';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ProfileService } from '../../services/profile/profile.service';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'mdcps-youth-appraisal',
  templateUrl: './youth-appraisal.component.html',
  styleUrls: ['./youth-appraisal.component.scss']
})
export class YouthAppraisalComponent implements OnInit {
  /**
   * @public
   */
  public youthApprForm: FormGroup;

  /**
   * @public
   */
  public typeaheadLength: number = 3;

  /**
   * @public
   */
  public isProcessing: boolean = false;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService) { }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.youthApprForm = this.fb.group({
      status: new FormControl('', []),
      youthId: new FormControl('', []),
      youthName: new FormControl('', []),
      appraisalDate: new FormControl('', [])
    });
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
          ? YA_CHILDREN_DATA.filter(child => {
            return child.MacwisId.indexOf(term) > -1;
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
    return selection.MacwisId;
  };

  /**
   * @public
   */
  public populateForm(data: any): void {
    this.youthApprForm.setValue({
      youthId: data.MacwisId,
      appraisalDate: data.DOBString,
      youthName: `${data.FirstName} ${data.LastName}`,
      status: (data.IsActive) ? 'Active' : 'Inactive'
    });

    // update form values
    this.youthApprForm.updateValueAndValidity();
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
    if (form.valid) {
      console.log(form.value);
    }
  }
}

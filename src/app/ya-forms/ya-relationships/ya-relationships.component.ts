import { Component, OnInit } from '@angular/core';
import { YA_RELSHP_LIST } from './ya-relationships.constants';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';

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
   * @constructor
   * @param {fb<FormBuilder>}
   * @param {util<UtilService>}
   */
  constructor(
    private fb: FormBuilder,
    private util: UtilService) {
    this.initFormConfig();

    this.relQuesList = YA_RELSHP_LIST;
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.relationshipForm = this.fb.group({
      abusivePartner: new FormGroup({
        verbally: new FormControl(false, []),
        mentally: new FormControl(false, []),
        physically: new FormControl(false, [])
      }),
      inRelationship: new FormControl('', []),
      afraidOfPartner: new FormControl('', []),
      forcedToHaveSex: new FormControl('', []),
      forcedSexualContact: new FormControl('', []),
      violentRelationship: new FormControl('', []),
      involvedInProstitution: new FormControl('', []),
      compensationForSexualServices: new FormControl('', [])
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

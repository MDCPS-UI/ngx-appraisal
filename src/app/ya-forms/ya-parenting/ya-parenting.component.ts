import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';


@Component({
  selector: 'mdcps-ya-parenting',
  templateUrl: './ya-parenting.component.html',
  styleUrls: ['./ya-parenting.component.scss']
})
export class YaParentingComponent implements OnInit {
  /**
   * @public
   */
  public config: any;

  /**
  * @public
  */
  public parentingForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   * @param {util<UtilService>}
   */
  constructor(
    private fb: FormBuilder,
    private util: UtilService) {
    this.initFormConfig();
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.parentingForm = this.fb.group({
      isPregnant: new FormControl('', []),
      isExpectingChild: new FormControl('', []),
      isParent: new FormControl('', []),
      childNames: new FormControl('', []),
      childrenLiveWithYou: new FormControl('', []),
      iHaveLegalCustody: new FormControl('', []),
      noLegalCustodyExplain: new FormControl('', []),
      missSchoolBecauseParenting: new FormControl('', []),
      hasHadInvestigation: new FormControl('', []),
      childrenHaveMedIssues: new FormControl('', []),
      childrenMedIssuesExplain: new FormControl('', []),
      receivingChildSupport: new FormControl('', []),
      childSupportAmount: new FormControl('', []),
      noChildSupportExplain: new FormControl('', []),
      payingChildSupport: new FormControl('', []),
      otherParentInvolved: new FormControl('', []),
      otherParentInvolvedExplain: new FormControl('', []),
      childrenInDaycare: new FormControl('', []),
      childrenRegularlyCaredFor: new FormControl('', []),
      payVoucher: new FormControl('', []),
      payOwnFunds: new FormControl('', []),
      payChildSupport: new FormControl('', []),
      payOutsideSource: new FormControl('', []),
      payNA: new FormControl('', [])
    });
  }

  /**
  * @public
  */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Health',
      previousBtnLabel: 'Placement & Safety'
    };
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this.util.navigate('/health');
      console.log(event.form.value);
    }
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/placements');
  }
}

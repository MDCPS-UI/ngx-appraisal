import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';

/**
 * @author: Shoukath Mohammed
 */
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
      pregnancyResponsible: new FormControl('', []),
      preNatalCare: new FormControl('', []),
      parent: new FormControl('', []),
      nameAgesOfChildren: new FormControl('', []),
      childrenLiveWithYou: new FormControl('', []),
      legalCustody: new FormControl('', []),
      noLegalCustody: new FormControl('', []),
      missSchoolBecauseofPregnant: new FormControl('', []),
      MDCPSInvestigationDone: new FormControl('', []),
      medicalIssues: new FormControl('', []),
      explainMedicalIssues: new FormControl('', []),
      receivingChildSupport: new FormControl('', []),
      childSupportAmount: new FormControl('', []),
      payingChildSupport: new FormControl('', []),
      otherParentInvolved: new FormControl('', []),
      howOtherParentInvolved: new FormControl('', []),
      currentyEnrolledInSchool: new FormControl('', []),
      regularlyCaredFor: new FormControl('', []),
      childcareServicesPayMethod: new FormControl('', [])
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

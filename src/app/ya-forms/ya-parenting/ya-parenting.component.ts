import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-parenting',
  templateUrl: './ya-parenting.component.html',
  styleUrls: ['./ya-parenting.component.scss']
})
export class YaParentingComponent implements OnInit {

   /**
   * @public
   */
  public parentingForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
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
    })
  }

  /**
   * @public
   */
  public onSubmit(event: any): void {
    if (event.form && event.form.valid) {
      console.log(event.form.value);
    }
  }

}

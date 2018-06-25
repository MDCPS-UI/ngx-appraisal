import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-documents',
  templateUrl: './ya-documents.component.html',
  styleUrls: ['./ya-documents.component.scss']
})
export class YaDocumentsComponent implements OnInit {

  /**
   * @public
   */
  public documentsForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.documentsForm = this.fb.group({
      birthCertificate: new FormControl('', []),
      noBirthCertificate: new FormControl('', []),
      socialSecurity: new FormControl('', []),
      noSocialSecurity: new FormControl('', []),
      medicaidCard: new FormControl('', []),
      noMedicaidCard: new FormControl('', []),
      driversLicense: new FormControl('', []),
      noDriversLicense: new FormControl('', []),
      courtOrders: new FormControl('', []),
      noCourtOrders: new FormControl('', []),
      educationDocuments: new FormControl('', []),
      noEducationDocuments: new FormControl('', []),
      deathCertificates: new FormControl('', []),
      noDeathCertificates: new FormControl('', []),
      citizenshipDocuments: new FormControl('', []),
      noCitizenshipDocuments: new FormControl('', []),
      medicalRecords: new FormControl('', []),
      noMedicalRecords: new FormControl('', []),
      religiousDocuments: new FormControl('', []),
      noReligiousDocuments: new FormControl('', []),
      relativesInformation: new FormControl('', []),
      noRelativesInformation: new FormControl('', []),
      previousPlacementInfo: new FormControl('', []),
      noPreviousPlacementInfo: new FormControl('', []),
      passport: new FormControl('', []),
      noPassport: new FormControl('', []),
      photographs: new FormControl('', []),
      noPhotographs: new FormControl('', []),
      resourceGuide: new FormControl('', []),
      noResourceGuide: new FormControl('', [])
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

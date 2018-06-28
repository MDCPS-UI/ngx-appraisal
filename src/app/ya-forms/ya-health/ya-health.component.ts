import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../shared/services/util/util.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-health',
  templateUrl: './ya-health.component.html',
  styleUrls: ['./ya-health.component.scss']
})
export class YaHealthComponent implements OnInit {

  /**
   * @public
   */
  public config: any;

 /**
   * @public
   */
  public healthForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder,
              private util: UtilService) {
              this.initFormConfig();
     }

  ngOnInit() {
    this.healthForm = this.fb.group({
      medicalIssues: new FormControl('', []),
      tramaticEvent: new FormControl('', []),
      abuseVictim: new FormControl('', []),
      abuseVictimOther: new FormControl('', []),
      dental: new FormControl('', []),
      medical: new FormControl('', []),
      vision: new FormControl('', []),
      psycological: new FormControl('', []),
      sexuallyActive: new FormControl('', []),
      adultToTalkTo: new FormControl('', []),
      testedForHIV_AIDS: new FormControl('', []),
      HIV_AIDSTestDate: new FormControl('', []),
      HIV_AIDSTestResults: new FormControl('', []),
      testedForSTD_STI: new FormControl('', []),
      STD_STITestDate: new FormControl('', []),
      STD_STITestResults: new FormControl('', []),
      receivingServices: new FormControl('', []),
      takingMedications: new FormControl('', []),
      listMedications: new FormControl('', []),
      medicationsAdministered: new FormControl('', []),
      trackMedicalAppts: new FormControl('', [])
    })
  }

  /**
   * @public
   */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Relationships',
      previousBtnLabel: 'Pregnant/Parenting'
    }
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this.util.navigate('/relationships');
      console.log(event.form.value);
    }
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/parenting');
  }

}

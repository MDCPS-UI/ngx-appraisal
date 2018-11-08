import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';


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
    this.healthForm = this.fb.group({
      medicalIssues: new FormControl('', []),
      hasTraumaticEvent: new FormControl('', []),
      isVictimPhysical: new FormControl('', []),
      isVictimEmotional: new FormControl('', []),
      isVictimSexual: new FormControl('', []),
      isVictimNeglect: new FormControl('', []),
      isVictimOther: new FormControl('', []),
      victimOtherText: new FormControl('', []),
      lastDentalExam: new FormControl('', []),
      lastMedicalExam: new FormControl('', []),
      lastVisionExam: new FormControl('', []),
      lastPsychExam: new FormControl('', []),
      isSexuallyActive: new FormControl('', []),
      hasAdult: new FormControl('', []),
      hasBeenTestedHIV: new FormControl('', []),
      lastHIVTestDate: new FormControl('', []),
      hivTestResults: new FormControl('', []),
      hasBeenTestedSTD: new FormControl('', []),
      lastSTDTestDate: new FormControl('', []),
      stdTestResults: new FormControl('', []),
      isMentalHealth: new FormControl('', []),
      isSubstanceAbuse: new FormControl('', []),
      isLearningDisability: new FormControl('', []),
      isDevelopDisability: new FormControl('', []),
      isPhysicalDisability: new FormControl('', []),
      isTakingMedication: new FormControl('', []),
      currentMedicationText: new FormControl('', []),
      areMedicationsAdministered: new FormControl('', []),
      keepTrackOfAppointments: new FormControl('', [])
    });
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
   * @param {event<any>}
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      //this.util.navigate('/relationships');
      console.log(event.form.value);
    }
    this.util.navigate('/relationships');
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/parenting');
  }

}

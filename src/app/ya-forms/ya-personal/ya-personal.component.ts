import { Component, OnInit } from '@angular/core';
import { YA_PERSONAL_LIST } from './ya-personal.constants';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';


@Component({
  selector: 'mdcps-ya-personal',
  templateUrl: './ya-personal.component.html',
  styleUrls: ['./ya-personal.component.scss']
})
export class YaPersonalComponent implements OnInit {
  /**
   * @public
   */
  public config: any;
  /**
   * @public
   */
  public questions: any[] = [];
  /**
   * @public
   */
  public personalForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   * @param {util<UtilService>}
   */
  constructor(
    private fb: FormBuilder,
    private util: UtilService) {
    this.initFormConfig();

    this.questions = YA_PERSONAL_LIST;
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.personalForm = this.fb.group({
      supportInNext6Months: new FormGroup({
        isEducation: new FormControl('', []),
        isEmployment: new FormControl('', []),
        isParenting: new FormControl('', []),
        isMentalHealth: new FormControl('', []),
        isTransportation: new FormControl('', []),
        isMedical: new FormControl('', []),
        isOther: new FormControl('', []),
        otherText: new FormControl('', [])
      }),
      oneGoalSixMonths: new FormControl('', []),
      currentChallenges: new FormControl('', []),
      whatMotivatesYou: new FormControl('', []),
      supportLooksLike: new FormControl('', []),
      hasTransportation: new FormControl('', []),
      transportationKind: new FormControl('', []),
      transportationBarriers: new FormControl('', []),
      transportationPlans: new FormControl('', [])
    });
  }

  /**
   * @public
   */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Received Documents',
      previousBtnLabel: 'Continuing Support/Services'
    };
  }

  /**
   * @public
   * @param {event<any>}
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this.util.navigate('/documents');
      console.log(event.form.value);
    }
  }

  /**
   * @public
   * @param {event<any>}
   */
  public onPrevious(event: any): void {
    this.util.navigate('/services');
  }
}

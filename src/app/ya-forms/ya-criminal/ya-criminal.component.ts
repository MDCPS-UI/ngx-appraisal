import { Component, OnInit } from '@angular/core';
import { YA_CRMNL_LIST } from './ya-criminal.constants';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';

@Component({
  selector: 'mdcps-ya-criminal',
  templateUrl: './ya-criminal.component.html',
  styleUrls: ['./ya-criminal.component.scss']
})
export class YaCriminalComponent implements OnInit {
  /**
   * @public
   */
  public config: any;

  /**
   * @public
   */
  public criminalQuesList: any[] = [];

  /**
   * @public
   */
  public criminalForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   * @param {util<UtilService>}
   */
  constructor(
    private fb: FormBuilder,
    private util: UtilService) {
    this.initFormConfig();
    this.criminalQuesList = YA_CRMNL_LIST;
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.criminalForm = this.fb.group({
      hasBeenArrested: new FormControl('', []),
      hasBeenConvicted: new FormControl('', []),
      hasCurrentWarrant: new FormControl('', []),
      isOnProbation: new FormControl('', []),
      hasLegalRepresentation: new FormControl('', []),
      isOnParole: new FormControl('', []),
      hasOpenCase: new FormControl('', []),
      isFreeOnBond: new FormControl('', []),
      hasGangActivity: new FormControl('', []),
      gangActivityText: new FormControl('', []),
      possessWeapon: new FormControl('', [])
    });
  }

  /**
   * @public
   */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Life Skills',
      previousBtnLabel: 'Relationships'
    };
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this.util.navigate('/skills');
      console.log(event.form.value);
    }
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/relationships');
  }
}

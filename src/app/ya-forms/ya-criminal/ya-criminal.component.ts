import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';

/**
 * @author: Shoukath Mohammed
 */
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
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.criminalForm = this.fb.group({
      everArrested: new FormControl('', []),
      everConvicted: new FormControl('', []),
      warrantOut: new FormControl('', []),
      onProbation: new FormControl('', []),
      legalRepresentation: new FormControl('', []),
      onParole: new FormControl('', []),
      openCase: new FormControl('', []),
      freeOnBond: new FormControl('', []),
      gangRelated: new FormControl('', []),
      possessWeapon: new FormControl('', []),
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

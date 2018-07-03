import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from '../../shared/services/util/util.service';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'mdcps-ya-placements',
  templateUrl: './ya-placements.component.html',
  styleUrls: ['./ya-placements.component.scss']
})
export class YaPlacementsComponent implements OnInit {
  /**
   * @public
   */
  public config: any;

  /**
   * @public
   */
  public placementsForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
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
    this.placementsForm = this.fb.group({
      timeInPlacement: new FormControl('', []),
      placementsInCare: new FormControl('', []),
      whyChangedPlacements: new FormControl('', []),
      feelSafeInPlacement: new FormControl('', []),
      whynotsafeInPlacement: new FormControl('', []),
      positivePlacementExperiences: new FormControl('', []),
      howConnectionsUsed: new FormControl('', []),
      maintainContact: new FormControl('', []),
      usedForPermancyPlan: new FormControl('', []),
      additionalFosterCareInfo: new FormControl('', []),
      contactName: new FormControl('', []),
      contactRelationship: new FormControl('', []),
      contactPhone: new FormControl('', []),
      contactEmail: new FormControl('', [])
    })
  }

  /**
  * @public
  */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Pregnant/Parenting',
      previousBtnLabel: 'Social Interests'
    }
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this.util.navigate('/parenting');
      console.log(event.form.value);
    }
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/interests');
  }
}

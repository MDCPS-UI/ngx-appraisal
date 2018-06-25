import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-placements',
  templateUrl: './ya-placements.component.html',
  styleUrls: ['./ya-placements.component.scss']
})
export class YaPlacementsComponent implements OnInit {

   /**
   * @public
   */
  public placementsForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
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

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';

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
    this.placementsForm = this.fb.group({
      currentPlacementLength: new FormControl('', []),
      pastTwoYearCount: new FormControl('', []),
      changePlacementReason: new FormControl('', []),
      feelSafeInPlacement: new FormControl('', []),
      noFeelSafeExplain: new FormControl('', []),
      positiveExperienceText: new FormControl('', []),
      maintainContactBioFam: new FormControl('', []),
      bioFamUsedInPlanning: new FormControl('', []),
      additionalInfo: new FormControl('', []),
      contactName: new FormControl('', []),
      contactRelationship: new FormControl('', []),
      contactPhone: new FormControl('', []),
      contactEmail: new FormControl('', []),
      mentorIdentified: new FormControl('', []),
      mentorExplain: new FormControl('', []),
      maintainContact: new FormArray([
        new FormGroup({
          name: new FormControl('', []),
          number: new FormControl('', []),
          email: new FormControl('', []),
          relationship: new FormControl('', [])
        })
      ])
    });
  }

  /**
   * @public
   */
  public onAddContact(e: MouseEvent) {
    (<FormArray>this.placementsForm.get('maintainContact')).push(
      new FormGroup({
        name: new FormControl('', []),
        number: new FormControl('', []),
        email: new FormControl('', []),
        relationship: new FormControl('', [])
      })
    )
  }

  /**
   * @public
   */
  public onDeleteContact(index, e: MouseEvent) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    (<FormArray>this.placementsForm.get('maintainContact')).removeAt(index);
  }


  /**
  * @public
  */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Pregnant/Parenting',
      previousBtnLabel: 'Housing'
    };
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
    this.util.navigate('/housing');
  }
}

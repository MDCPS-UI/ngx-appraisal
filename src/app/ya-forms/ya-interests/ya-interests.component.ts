import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'mdcps-ya-interests',
  templateUrl: './ya-interests.component.html',
  styleUrls: ['./ya-interests.component.scss']
})
export class YaInterestsComponent implements OnInit {
  /**
   * @public
   */
  public config: any;

  /**
    * @public
    */
  public interestsForm: FormGroup;

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
    this.interestsForm = this.fb.group({
      extraActivities: new FormControl('', []),
      listActivities: new FormControl('', []),
      religiousActivities: new FormControl('', []),
      listReligiousActivities: new FormControl('', []),
      hobbies: new FormControl('', []),
      listhobbies: new FormControl('', [])
    });
  }

  /**
   * @public
   */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Placement & Safety',
      previousBtnLabel: 'Employment'
    };
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this.util.navigate('/placements');
      console.log(event.form.value);
    }
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/employment');
  }

}

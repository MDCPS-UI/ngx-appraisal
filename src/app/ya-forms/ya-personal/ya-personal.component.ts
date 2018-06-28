import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';

/**
 * @author: Shoukath Mohammed
 */
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
  public personalForm: FormGroup;

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
    this.personalForm = this.fb.group({
      goalInNext6Months: new FormControl('', []),
      currentChallenges: new FormControl('', []),
      motivationForGoals: new FormControl('', []),
      supportInNext6Months: new FormControl('', [])
    })
  }

  /**
   * @public
   */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Goals and Actions',
      previousBtnLabel: 'Continuing Support/Services'
    };
  }

  /**
   * @public
   * @param {event<any>}
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this.util.navigate('/actions');
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

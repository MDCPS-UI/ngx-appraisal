import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';

@Component({
  selector: 'mdcps-ya-actions',
  templateUrl: './ya-actions.component.html',
  styleUrls: ['./ya-actions.component.scss']
})
export class YaActionsComponent implements OnInit {
  /**
   * @public
   */
  public config: any;

  /**
   * @public
   */
  public actionsForm: FormGroup;

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
    this.actionsForm = this.fb.group({
      educationShortGoals: new FormControl('', []),
      educationGoalTasks: new FormControl('', []),
      educationLongGoals: new FormControl('', []),
      educationGoalProgress: new FormControl('', []),
      educationGoalsCompletionDate: new FormControl('', []),
      housingShortGoals: new FormControl('', []),
      housingLongGoals: new FormControl('', []),
      housingGoalTasks: new FormControl('', []),
      housingGoalProgress: new FormControl('', []),
      housingGoalsCompletionDate: new FormControl('', []),
      employmentShortGoals: new FormControl('', []),
      employmentLongGoals: new FormControl('', []),
      employmentGoalsTasks: new FormControl('', []),
      employmentGoalProgress: new FormControl('', []),
      employmentGoalsCompletionDate: new FormControl('', []),
      transportationShortGoals: new FormControl('', []),
      transportationLongGoals: new FormControl('', []),
      transportationGoalsTasks: new FormControl('', []),
      transportationGoalsProgress: new FormControl('', []),
      transportationGoalsCompletionDate: new FormControl('', []),
      supportiveShortGoals: new FormControl('', []),
      supportiveLongGoals: new FormControl('', []),
      supportiveGoalsTasks: new FormControl('', []),
      supportiveGoalsProgress: new FormControl('', []),
      supportiveGoalsCompletionDate: new FormControl('', []),
      otherShortGoals: new FormControl('', []),
      otherLongGoals: new FormControl('', []),
      otherGoalsTasks: new FormControl('', []),
      otherGoalsProgress: new FormControl('', []),
      otherGoalsCompletionDate: new FormControl('', []),
      notes: new FormControl('', [])
    });
  }

  /**
   * @public
   */
  public onSubmit(event: any): void {
    if (event.form && event.form.valid) {
      console.log(event.form.value);
    }
  }

  /**
   * @public
   */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Received Documents',
      previousBtnLabel: 'Personal'
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

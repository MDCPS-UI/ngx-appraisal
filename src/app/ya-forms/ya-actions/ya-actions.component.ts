import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-actions',
  templateUrl: './ya-actions.component.html',
  styleUrls: ['./ya-actions.component.scss']
})
export class YaActionsComponent implements OnInit {

  /**
   * @public
   */
  public actionsForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.actionsForm = this.fb.group({
      educationGoals: new FormControl('', []),
      educationGoalTasks: new FormControl('', []),
      educationGoalProgress: new FormControl('', []),
      educationGoalsCompletionDate: new FormControl('', []),
      housingGoals: new FormControl('', []),
      housingGoalTasks: new FormControl('', []),
      housingGoalProgress: new FormControl('', []),
      housingGoalsCompletionDate: new FormControl('', []),
      employmentGoals: new FormControl('', []),
      employmentGoalsTasks: new FormControl('', []),
      employmentGoalProgress: new FormControl('', []),
      employmentGoalsCompletionDate: new FormControl('', []),
      transportationGoals: new FormControl('', []),
      transportationGoalsTasks: new FormControl('', []),
      transportationGoalsProgress: new FormControl('', []),
      transportationGoalsCompletionDate: new FormControl('', []),
      supportiveGoals: new FormControl('', []),
      supportiveGoalsTasks: new FormControl('', []),
      supportiveGoalsProgress: new FormControl('', []),
      supportiveGoalsCompletionDate: new FormControl('', []),
      otherGoals: new FormControl('', []),
      otherGoalsTasks: new FormControl('', []),
      otherGoalsProgress: new FormControl('', []),
      otherGoalsCompletionDate: new FormControl('', []),
      notes: new FormControl('', [])
    })
  }

  /**
   * @public
   */
  public onSubmit(event: any): void {
    if (event.form && event.form.valid) {
      console.log(event.form.value);
    }
  }

}

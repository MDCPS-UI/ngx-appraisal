import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
    selector: 'mdcps-goals',
    templateUrl: './goals.component.html',
    styleUrls: ['./goals.component.scss']
})

export class GoalsComponent implements OnInit {

/**
 * @public
 * */    
public goalsForm: FormGroup

/**
 * @constructor
 */
  constructor(
      private fb: FormBuilder
  ) { }

  /**
   *  @public
   *  @type: method<life cycle hook>
   *  @return: void
   *  @description: N/A
   */
  public ngOnInit(): void { 
      this.goalsForm = this.fb.group({
        goals: new FormArray([
            new FormGroup({
              goalText: new FormControl('', []),
              tasks: new FormControl('', []),
              personResp: new FormControl('', []),
              progress: new FormControl('', []),
              goalsCompleteDt: new FormControl('',[])
            }) 
          ]),
        concerns: new FormArray([
            new FormGroup({
              concernsText: new FormControl('', []),
              resolutionsText: new FormControl('', []),
              personText: new FormControl('', []),
              concCompleteDt: new FormControl('', [])
            })
        ]) 
      })
  }

  /**
   * @public
   */
  public onAddGoal(): void {
    (<FormArray>this.goalsForm.get('goals')).push(
      new FormGroup({
        goalText: new FormControl('', []),
        tasks: new FormControl('', []),
        personResp: new FormControl('', []),
        progress: new FormControl('', []),
        completeDt: new FormControl('',[])
      })
    )
  }

  /**
   * @public
   */
  public onAddConcern(): void {
      (<FormArray>this.goalsForm.get('concerns')).push(
        new FormGroup({
            concernsText: new FormControl('', []),
            resolutionsText: new FormControl('', []),
            personText: new FormControl('', []),
            concCompleteDt: new FormControl('', [])
          })
      )
  }

  /**
   * @public
   */
  public onDeleteGoal(index): void {
    (<FormArray>this.goalsForm.get('goals')).removeAt(index);
  }

/**
 * @public
 */
public onDeleteConcern(index): void {
    (<FormArray>this.goalsForm.get('concerns')).removeAt(index);
}
}





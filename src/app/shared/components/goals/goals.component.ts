import { Goal, Concern } from './goals';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: "mdcps-goals",
  templateUrl: "./goals.component.html",
  styleUrls: ["./goals.component.scss"]
})
export class GoalsComponent implements OnInit {
  /**
   * @public
   */
  public goalsForm: FormGroup;

  /**
   * @constructor
   */
  constructor(private fb: FormBuilder) {}

  /**
   * @public
   * @type: method<life cycle hook>
   * @return: void
   * @description: N/A
   */
  public ngOnInit(): void {
    this.goalsForm = this.fb.group({
      goals: new FormArray([
        new FormGroup(new Goal().fields)
      ]),
      concerns: new FormArray([
        new FormGroup(new Concern().fields)
      ])
    });
  }

  /**
   * @public
   */
  public onAddGoal(): void {
    (<FormArray>this.goalsForm.get("goals")).push(
      new FormGroup(new Goal().fields)
    );
  }

  /**
   * @public
   */
  public onAddConcern(): void {
    (<FormArray>this.goalsForm.get("concerns")).push(
      new FormGroup(new Concern().fields)
    );
  }

  /**
   * @public
   */
  public onDeleteGoal(idx: number): void {
    (<FormArray>this.goalsForm.get("goals")).removeAt(idx);
  }

  /**
   * @public
   */
  public onDeleteConcern(idx: number): void {
    (<FormArray>this.goalsForm.get("concerns")).removeAt(idx);
  }
}

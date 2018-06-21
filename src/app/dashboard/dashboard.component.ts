import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mdcps-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public isLinear: boolean = false;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;

  /**
   * @constructor
   * @param fb
   */
  constructor(private fb: FormBuilder) { }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
  }
}

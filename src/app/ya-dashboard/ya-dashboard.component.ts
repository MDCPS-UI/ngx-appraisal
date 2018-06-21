import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mdcps-dashboard',
  templateUrl: './ya-dashboard.component.html',
  styleUrls: ['./ya-dashboard.component.scss']
})
export class YaDashboardComponent implements OnInit {
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

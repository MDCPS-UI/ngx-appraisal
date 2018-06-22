import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-employment',
  templateUrl: './ya-employment.component.html',
  styleUrls: ['./ya-employment.component.scss']
})
export class YaEmploymentComponent implements OnInit {

  /**
   * @public
   */
  public employmentForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}

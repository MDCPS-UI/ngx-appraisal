import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-housing',
  templateUrl: './ya-housing.component.html',
  styleUrls: ['./ya-housing.component.scss']
})
export class YaHousingComponent implements OnInit {

  /**
   * @public
   */
  public housingForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}

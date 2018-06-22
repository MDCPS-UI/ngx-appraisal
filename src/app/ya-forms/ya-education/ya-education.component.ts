import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-education',
  templateUrl: './ya-education.component.html',
  styleUrls: ['./ya-education.component.scss']
})
export class YaEducationComponent implements OnInit {

 /**
   * @public
   */
  public educationForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-health',
  templateUrl: './ya-health.component.html',
  styleUrls: ['./ya-health.component.scss']
})
export class YaHealthComponent implements OnInit {

 /**
   * @public
   */
  public healthForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}

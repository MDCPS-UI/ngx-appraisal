import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-parenting',
  templateUrl: './ya-parenting.component.html',
  styleUrls: ['./ya-parenting.component.scss']
})
export class YaParentingComponent implements OnInit {

   /**
   * @public
   */
  public parentingForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}

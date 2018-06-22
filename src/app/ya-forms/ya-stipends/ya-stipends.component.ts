import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'mdcps-ya-stipends',
  templateUrl: './ya-stipends.component.html',
  styleUrls: ['./ya-stipends.component.scss']
})
export class YaStipendsComponent implements OnInit {

  /**
   * @public
   */
  public stipendsForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-personal',
  templateUrl: './ya-personal.component.html',
  styleUrls: ['./ya-personal.component.scss']
})
export class YaPersonalComponent implements OnInit {

  /**
   * @public
   */
  public personalForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}

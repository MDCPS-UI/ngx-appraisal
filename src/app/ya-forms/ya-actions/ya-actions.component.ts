import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-actions',
  templateUrl: './ya-actions.component.html',
  styleUrls: ['./ya-actions.component.scss']
})
export class YaActionsComponent implements OnInit {

  /**
   * @public
   */
  public actionsForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}

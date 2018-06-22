import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-skills',
  templateUrl: './ya-skills.component.html',
  styleUrls: ['./ya-skills.component.scss']
})
export class YaSkillsComponent implements OnInit {

  /**
   * @public
   */
  public skillsForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}

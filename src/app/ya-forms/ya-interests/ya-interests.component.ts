import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-interests',
  templateUrl: './ya-interests.component.html',
  styleUrls: ['./ya-interests.component.scss']
})
export class YaInterestsComponent implements OnInit {

 /**
   * @public
   */
  public interestsForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.interestsForm = this.fb.group({
      extraActivities: new FormControl('', []),
      listActivities: new FormControl('', []),
      religiousActivities: new FormControl('', []),
      listReligiousActivities: new FormControl('', []),
      hobbies: new FormControl('', []),
      listhobbies: new FormControl('', [])
    })
  }

}

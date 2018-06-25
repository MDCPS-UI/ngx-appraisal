import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-relationships',
  templateUrl: './ya-relationships.component.html',
  styleUrls: ['./ya-relationships.component.scss']
})
export class YaRelationshipsComponent implements OnInit {

/**
   * @public
   */
  public relationshipForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.relationshipForm = this.fb.group({
      everArrested: new FormControl('',[]),
      abusivePartner: new FormControl('',[]),
      afraidOfPartner: new FormControl('',[]),
      violentRelationship: new FormControl('',[]),
      compensationForSexualServices: new FormControl('',[]),
      forcedSexualContact: new FormControl('',[]),
      forcedToHaveSex: new FormControl('',[]),
      involvedInProstitution: new FormControl('',[])
    })
  }

  /**
   * @public
   */
  public onSubmit(event: any): void {
    if (event.form && event.form.valid) {
      console.log(event.form.value);
    }
  }

}

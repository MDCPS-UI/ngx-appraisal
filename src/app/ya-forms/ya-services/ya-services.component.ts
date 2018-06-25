import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-services',
  templateUrl: './ya-services.component.html',
  styleUrls: ['./ya-services.component.scss']
})
export class YaServicesComponent implements OnInit {

  /**
   * @public
   */
  public servicesForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.servicesForm = this.fb.group({
      etv: new FormControl('',[]),
      appliedMedicaid: new FormControl('',[]),
      healthCareExplored: new FormControl('',[]),
      permanetntConnections: new FormControl('',[]),
      transportationNeeds: new FormControl('',[]),
      publicAssistance: new FormControl('',[]),
      notes: new FormControl('', [])
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

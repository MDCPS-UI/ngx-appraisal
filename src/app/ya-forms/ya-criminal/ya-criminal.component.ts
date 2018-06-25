import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-criminal',
  templateUrl: './ya-criminal.component.html',
  styleUrls: ['./ya-criminal.component.scss']
})
export class YaCriminalComponent implements OnInit {

/**
   * @public
   */
  public criminalForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.criminalForm = this.fb.group({
      everArrested: new FormControl('', []),
      everConvicted: new FormControl('', []),
      warrantOut: new FormControl('', []),
      onProbation: new FormControl('', []),
      legalRepresentation: new FormControl('', []),
      onParole: new FormControl('', []),
      openCase: new FormControl('', []),
      freeOnBond: new FormControl('', []),
      gangRelated: new FormControl('', []),
      possessWeapon: new FormControl('', []),
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

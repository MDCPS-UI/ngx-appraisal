import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-placements',
  templateUrl: './ya-placements.component.html',
  styleUrls: ['./ya-placements.component.scss']
})
export class YaPlacementsComponent implements OnInit {

   /**
   * @public
   */
  public placementsForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}

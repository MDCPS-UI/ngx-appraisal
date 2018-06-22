import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-review',
  templateUrl: './ya-review.component.html',
  styleUrls: ['./ya-review.component.scss']
})
export class YaReviewComponent implements OnInit {

  /**
   * @public
   */
  public reviewForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}

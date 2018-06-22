import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-documents',
  templateUrl: './ya-documents.component.html',
  styleUrls: ['./ya-documents.component.scss']
})
export class YaDocumentsComponent implements OnInit {

  /**
   * @public
   */
  public documentsForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}

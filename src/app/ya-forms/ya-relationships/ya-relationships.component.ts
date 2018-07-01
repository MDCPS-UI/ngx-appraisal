import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../shared/services/util/util.service';
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
  public config: any;

/**
   * @public
   */
  public relationshipForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder,
              private util: UtilService) {
              this.initFormConfig();            
          }

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
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Criminal Justice System',
      previousBtnLabel: 'Health'
    }
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this.util.navigate('/criminal');
      console.log(event.form.value);
    }
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/health');
  }


}

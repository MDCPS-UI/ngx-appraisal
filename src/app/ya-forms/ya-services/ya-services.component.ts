import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../shared/services/util/util.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'mdcps-ya-services',
  templateUrl: './ya-services.component.html',
  styleUrls: ['./ya-services.component.scss']
})
export class YaServicesComponent implements OnInit {

  /**
   * @public
   */
  public config: any;

  /**
   * @public
   */
  public servicesForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   * @param {util<UtilService>}
   */
  constructor(
    private fb: FormBuilder,
    private util: UtilService) {
    this.initFormConfig();
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.servicesForm = this.fb.group({
      etv: new FormControl('',[]),
      appliedMedicaid: new FormControl('',[]),
      healthCareExplored: new FormControl('',[]),
      permanetntConnections: new FormControl('',[]),
      transportationNeeds: new FormControl('',[]),
      publicAssistance: new FormControl('',[]),
      notes: new FormControl('', [])
    });
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this.util.navigate('/personal');
      console.log(event.form.value);
    }
  }

  /**
   * @public
   * @param {event<any>}
   */
  public onPrevious(event: any): void {
    this.util.navigate('/stipends');
  }

  /**
   * @public
   */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Personal',
      previousBtnLabel: 'Stipends'
    };
  }
}

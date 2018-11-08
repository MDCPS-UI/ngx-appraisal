import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';

//constant
import { YA_SRVC_LIST } from './ya-services.constants';

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
   * @public
   */
  public serviceList: any = {};

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   * @param {util<UtilService>}
   */
  constructor(
    private fb: FormBuilder,
    private util: UtilService) {
    this.initFormConfig();

    //dynamic service data list
    this.serviceList = YA_SRVC_LIST;
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.servicesForm = this.fb.group({
      medicaid: new FormControl('',[]),
      medicaidOtherText: new FormControl('',[]),
      mentalHealth: new FormControl('',[]),
      mentalHealthOtherText: new FormControl('',[]),
      parentingClasses: new FormControl('',[]),
      parentingClassesOtherText: new FormControl('',[]),
      transportation: new FormControl('',[]),
      transportationOtherText: new FormControl('',[]),
      snap: new FormControl('',[]),
      snapOtherText: new FormControl('',[]),
      tanf: new FormControl('',[]),
      tanfOtherText: new FormControl('',[]),
      childCareVoucher: new FormControl('',[]),
      childCareVoucherOtherText: new FormControl('', []),
      locateHousing: new FormControl('',[]),
      locateHousingOtherText: new FormControl('',[]),
      scheduleCounseling: new FormControl('',[]),
      scheduleCounselingOtherText: new FormControl('',[]),
      other: new FormControl('',[]),
      otherOtherText: new FormControl('',[]),
      notes: new FormControl('',[])
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

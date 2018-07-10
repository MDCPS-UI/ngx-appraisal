import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../shared/services/util/util.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

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
      applyMedicaid: new FormControl('',[]),
      applyMedicaidOther: new FormControl('',[]),
      locateMentalHealth: new FormControl('',[]),
      locateMentalhealthOther: new FormControl('',[]),
      parentingClasses: new FormControl('',[]),
      parentingClassesOther: new FormControl('',[]),
      secureTransport: new FormControl('',[]),
      secureTransportOther: new FormControl('',[]),
      snapBenefits: new FormControl('',[]),
      snapBenefitsOther: new FormControl('',[]),
      tanfBenefits: new FormControl('',[]),
      tanfBenefitsOther: new FormControl('',[]),
      childcareVoucher: new FormControl('',[]),
      childcareVoucherOther: new FormControl('', []),
      locateHousing: new FormControl('',[]),
      locateHousingOther: new FormControl('',[]),
      scheduleCounseling: new FormControl('',[]),
      scheduleCounselingOther: new FormControl('',[]),
      other: new FormControl('',[]),
      otherExplain: new FormControl('',[]),
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

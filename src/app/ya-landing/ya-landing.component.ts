import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UtilService } from './../shared/services/util/util.service';
import { AppraisalService } from './../shared/services/appraisal/appraisal.service';
import { ActiveModelService } from './../shared/services/active-model/active-model.service';

@Component({
  selector: 'mdcps-ya-landing',
  templateUrl: './ya-landing.component.html',
  styleUrls: ['./ya-landing.component.scss']
})
export class YaLandingComponent implements OnInit {

  /**
   * @public
   * @type: string
   */
  public workerEmail: string;

  /**
   * @constructor
   */
  constructor(
    private util: UtilService,
    private appraisal: AppraisalService,
    private activeModel: ActiveModelService) { }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.workerEmail = this.util.getQueryStringValue('uname');
    this.activeModel.setWorkerEmail(this.workerEmail);
    window.sessionStorage.setItem('workerEmail', this.workerEmail);
  }

  /**
   * @public
   */
  public onFormSubmit(e: any): void {
    if (e && e.isFormValid) {
      const req = this.appraisal.request('createAppraisal', [
        e.formValue.macwisId['MacwisId'],
        this.workerEmail]
      ).subscribe(data => {
        console.log(data);
      });
    }
  }
}

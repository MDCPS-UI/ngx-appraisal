import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UtilService } from './../shared/services/util/util.service';
import { ProfileService } from './../shared/services/profile/profile.service';
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
    private router: Router,
    private util: UtilService,
    private appraisal: AppraisalService,
    private profileService: ProfileService,
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
      const childId: string = e.formValue.macwisID['macwisID'];
      this.appraisal.request('createAppraisal', [childId, this.workerEmail]
      ).subscribe(data => {
        this.processIt.apply(this, [e, data, childId]);
      });
    }
  }

  /**
   * @public
   */
  public processIt(e: any, data: any, childId: string): void {
    if (data && data.id) {
      this.activeModel.setChildData(e.formValue);
      this.profileService.setItem('appraisal', e.formValue);
      this.router.navigate(['/dashboard'], {
        queryParams: {
          'childId': childId,
          'appraisalId': data.id
        },
        queryParamsHandling: 'merge',
        preserveQueryParams: true
      });
    }
  }
}

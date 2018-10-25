import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';


@Component({
  selector: 'mdcps-ya-interests',
  templateUrl: './ya-interests.component.html',
  styleUrls: ['./ya-interests.component.scss']
})
export class YaInterestsComponent implements OnInit {
  /**
   * @public
   */
  public config: any;

  /**
    * @public
    */
  public interestsForm: FormGroup;

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
    this.interestsForm = this.fb.group({
      isInvolved: new FormControl('', []),
      dance: new FormControl('', []),
      cheerleading: new FormControl('', []),
      choirChorus: new FormControl('', []),
      band: new FormControl('', []),
      dramaTheater: new FormControl('', []),
      baseball: new FormControl('', []),
      softball: new FormControl('', []),
      football: new FormControl('', []),
      soccer: new FormControl('', []),
      track: new FormControl('', []),
      golf: new FormControl('', []),
      basketball: new FormControl('', []),
      swimming: new FormControl('', []),
      other: new FormControl('', []),
      otherExplain: new FormControl('', []),
      participatesReligion: new FormControl('', []),
      religionOtherExplain: new FormControl('', []),
      hasClubsHobbies: new FormControl('', []),
      clubsHobbies: new FormControl('', []),
      listhobbies: new FormControl('', [])
    });
  }

  /**
   * @public
   */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Housing',
      previousBtnLabel: 'Employment'
    };
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this.util.navigate('/housing');
      console.log(event.form.value);
    }
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/employment');
  }

}

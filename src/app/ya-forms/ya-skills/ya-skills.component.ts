import { Component, OnInit } from '@angular/core';
import { YA_SKILLS_LIST } from './ya-skills.constants';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from '../../shared/services/util/util.service';

@Component({
  selector: 'mdcps-ya-skills',
  templateUrl: './ya-skills.component.html',
  styleUrls: ['./ya-skills.component.scss']
})
export class YaSkillsComponent implements OnInit {
  /**
   * @public
   */
  public config: any;

  /**
   * @public
   */
  public sections: any[];

  /**
   * @public
   */
  public skillsForm: FormGroup;

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
    this.skillsForm = this.fb.group({
      emailSkills: new FormControl('', []),
      cookingSkills: new FormControl('', []),
      laundrySkills: new FormControl('', []),
      medicalCareSkills: new FormControl('', []),
      bathingSkills: new FormControl('', []),
      brushingSkills: new FormControl('', []),
      protectionSkills: new FormControl('', []),
      speakingSkills: new FormControl('', []),
      abusiveRelationSkills: new FormControl('', []),
      angerManagementSkills: new FormControl('', []),
      finacialSkills: new FormControl('', []),
      budgetSkills: new FormControl('', []),
      resumeSkills: new FormControl('', []),
      jobApplicationSkills: new FormControl('', []),
      jobInterviewSkills: new FormControl('', []),
      visionSkills: new FormControl('', []),
      drivingSkills: new FormControl('', []),
      educationalSupport: new FormControl('', []),
      employmentServices: new FormControl('', []),
      healthCare: new FormControl('', []),
      moneyManagement: new FormControl('', []),
      housingServices: new FormControl('', []),
      afterCare: new FormControl('', []),
      etvServices: new FormControl('', [])
    });

    this.sections = YA_SKILLS_LIST;
  }

  /**
   * @public
   */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Stipends',
      previousBtnLabel: 'Criminal Justice System'
    };
  }

  /**
   * @public
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this.util.navigate('/stipends');
      console.log(event.form.value);
    }
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/criminal');
  }

}

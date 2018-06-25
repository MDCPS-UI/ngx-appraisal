import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdcps-ya-skills',
  templateUrl: './ya-skills.component.html',
  styleUrls: ['./ya-skills.component.scss']
})
export class YaSkillsComponent implements OnInit {

  /**
   * @public
   */
  public skillsForm: FormGroup;

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
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
    })
  }

  /**
   * @public
   */
  public onSubmit(event: any): void {
    if (event.form && event.form.valid) {
      console.log(event.form.value);
    }
  }

}

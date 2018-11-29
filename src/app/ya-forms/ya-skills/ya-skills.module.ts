// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/modules/material/material.module';
import { BaseFormModule } from './../../shared/components/base-form/base-form.module';

// Components
import { YaSkillsComponent } from './ya-skills.component';

// YA Skills Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaSkillsComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    BaseFormModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    YaSkillsComponent
  ],
  exports: [RouterModule]
})
export class YaSkillsModule { }

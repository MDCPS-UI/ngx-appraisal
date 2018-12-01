// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GoalsModule } from './../../shared/components/goals/goals.module';
import { MaterialModule } from './../../shared/modules/material/material.module';
import { BaseFormModule } from './../../shared/components/base-form/base-form.module';
import { DatePickerModule } from './../../shared/components/date-picker/date-picker.module';

// Components
import { YaEducationComponent } from './ya-education.component';

// YA Education Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaEducationComponent
  }
];

@NgModule({
  imports: [
    GoalsModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    BaseFormModule,
    DatePickerModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    YaEducationComponent
  ],
  exports: [RouterModule]
})
export class YaEducationModule { }

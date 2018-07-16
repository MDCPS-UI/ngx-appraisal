// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BaseFormModule } from './../../shared/components/base-form/base-form.module';
import { DatePickerModule } from './../../shared/components/date-picker/date-picker.module';

// Components
import { YaDemographicsComponent } from './ya-demographics.component';

// YA Demographics Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaDemographicsComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    BaseFormModule,
    DatePickerModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    YaDemographicsComponent
  ],
  exports: [RouterModule]
})
export class YaDemographicsModule { }

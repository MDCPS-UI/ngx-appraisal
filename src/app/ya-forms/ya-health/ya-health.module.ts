// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BaseFormModule } from './../../shared/components/base-form/base-form.module';
import { DatePickerModule } from './../../shared/components/date-picker/date-picker.module';

// Components
import { YaHealthComponent } from './ya-health.component';

// YA Health Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaHealthComponent
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
    YaHealthComponent
  ],
  exports: [RouterModule]
})
export class YaHealthModule { }

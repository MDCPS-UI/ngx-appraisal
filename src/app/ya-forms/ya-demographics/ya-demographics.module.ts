// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { YaDemographicsComponent } from './ya-demographics.component';
import { BaseFormComponent } from './../../shared/components/base-form/base-form.component';

// YA Demographics Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaDemographicsComponent
  }
];

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    BaseFormComponent,
    YaDemographicsComponent
  ],
  exports: [RouterModule]
})
export class YaDemographicsModule { }

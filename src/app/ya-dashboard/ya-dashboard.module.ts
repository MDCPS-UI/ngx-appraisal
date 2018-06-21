import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { YaDashboardComponent } from './ya-dashboard.component';
import { MaterialModule } from './../shared/modules/material/material.module';
import { HeaderComponent } from './../shared/components/layout/header/header.component';
import { YouthAppraisalComponent } from './../shared/components/youth-appraisal/youth-appraisal.component';

// MDCPS Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaDashboardComponent,
    children: [
      {
        path: '',
        loadChildren: './../ya-forms/ya-forms.module#YaFormsModule'
      }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    HeaderComponent,
    YaDashboardComponent,
    YouthAppraisalComponent
  ],
  exports: [RouterModule]
})
export class YaDashboardModule { }

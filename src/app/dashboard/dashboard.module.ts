import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from './../shared/modules/material/material.module';
import { HeaderComponent } from './../shared/components/layout/header/header.component';
import { YouthAppraisalComponent } from './../shared/components/youth-appraisal/youth-appraisal.component';

// MDCPS Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: DashboardComponent
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
    DashboardComponent,
    YouthAppraisalComponent
  ],
  exports: [RouterModule]
})
export class DashboardModule { }

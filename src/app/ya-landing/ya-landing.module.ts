// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './../shared/modules/material/material.module';

// component
import { YaLandingComponent } from './ya-landing.component';
import { HeaderComponent } from './../shared/components/layout/header/header.component';
import { YouthAppraisalComponent } from './../shared/components/youth-appraisal/youth-appraisal.component';

// MDCPS Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaLandingComponent
  }
];

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    HeaderComponent,
    YaLandingComponent,
    YouthAppraisalComponent
  ]
})
export class YaLandingModule { }

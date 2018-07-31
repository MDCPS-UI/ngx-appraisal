// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './../shared/modules/material/material.module';
import { HeaderModule } from './../shared/components/layout/header/header.module';
import { YaModule } from './../shared/components/youth-appraisal/youth-appraisal.module';

// component
import { YaLandingComponent } from './ya-landing.component';

// MDCPS Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaLandingComponent
  }
];

@NgModule({
  imports: [
    YaModule
    , NgbModule
    , CommonModule
    , HeaderModule
    , MaterialModule
    , ReactiveFormsModule
    , RouterModule.forChild(ROUTES)
  ],
  declarations: [
    YaLandingComponent
  ]
})
export class YaLandingModule { }

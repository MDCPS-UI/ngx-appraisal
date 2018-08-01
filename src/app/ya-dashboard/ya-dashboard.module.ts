import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YaDashboardComponent } from './ya-dashboard.component';
import { MaterialModule } from './../shared/modules/material/material.module';
import { HeaderModule } from '../shared/components/layout/header/header.module';
import { YaModule } from './../shared/components/youth-appraisal/youth-appraisal.module';
import { SideBarComponent } from './../shared/components/layout/side-bar/side-bar.component';

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
    YaModule
    , NgbModule
    , HeaderModule
    , CommonModule
    , MaterialModule
    , ReactiveFormsModule
    , RouterModule.forChild(ROUTES)
  ],
  declarations: [
    SideBarComponent,
    YaDashboardComponent
  ],
  exports: [RouterModule]
})
export class YaDashboardModule { }

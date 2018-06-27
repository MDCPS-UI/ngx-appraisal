import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YaDashboardComponent } from './ya-dashboard.component';
import { MaterialModule } from './../shared/modules/material/material.module';
import { HeaderComponent } from './../shared/components/layout/header/header.component';
import { SideBarComponent } from './../shared/components/layout/side-bar/side-bar.component';
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

/**
 * @author: Shoukath Mohammed
 */
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
    SideBarComponent,
    YaDashboardComponent,
    YouthAppraisalComponent
  ],
  exports: [RouterModule]
})
export class YaDashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from './../shared/modules/material/material.module';
import { HeaderComponent } from './../shared/components/layout/header/header.component';

// MDCPS Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: DashboardComponent
  }
];

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    HeaderComponent,
    DashboardComponent
  ],
  exports: [RouterModule]
})
export class DashboardModule { }

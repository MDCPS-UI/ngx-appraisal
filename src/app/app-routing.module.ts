import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, Route } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { UtilService } from './shared/services/util/util.service';
import { MaterialModule } from './shared/modules/material/material.module';

// routes
const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    data: {
      bgClass: 'bg-white'
    },
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }
];

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
  declarations: [],
  imports: [
    NgbModule,
    CommonModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule],
  providers: [UtilService]
})
export class AppRoutingModule { }

// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components

// Services
import { UtilService } from './shared/services/util/util.service';

// MDCPS Routes
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
    loadChildren: './ya-dashboard/ya-dashboard.module#YaDashboardModule'
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
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule],
  providers: [UtilService]
})
export class AppRoutingModule { }

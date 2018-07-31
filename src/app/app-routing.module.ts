// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Services
import { UtilService } from './shared/services/util/util.service';
import { ProfileService } from './shared/services/profile/profile.service';

// MDCPS Routes
const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'landing'
  },
  {
    path: 'dashboard',
    data: {
      bgClass: 'bg-white'
    },
    loadChildren: './ya-dashboard/ya-dashboard.module#YaDashboardModule'
  },
  {
    path: 'landing',
    data: {
      bgClass: 'bg-white'
    },
    loadChildren: './ya-landing/ya-landing.module#YaLandingModule'
  }
];

@NgModule({
  declarations: [],
  imports: [
    NgbModule,
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule],
  providers: [UtilService, ProfileService]
})
export class AppRoutingModule { }

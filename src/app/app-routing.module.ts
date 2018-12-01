// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from './shared/components/layout/header/header.module';

// Components
import { YaErrorComponent } from './ya-error/ya-error.component';

// Services
import { AuthGuard } from './shared/guards/auth.guard';
import { UtilService } from './shared/services/util/util.service';
import { AjaxService } from './shared/services/ajax/ajax.service';
import { ProfileService } from './shared/services/profile/profile.service';
import { AppraisalService } from './shared/services/appraisal/appraisal.service';
import { ActiveModelService } from './shared/services/active-model/active-model.service';

// Misc
import { environment } from './../environments/environment';

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
    canActivateChild: [AuthGuard],
    loadChildren: './ya-dashboard/ya-dashboard.module#YaDashboardModule'
  },
  {
    path: 'landing',
    data: {
      bgClass: 'bg-white'
    },
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: './ya-landing/ya-landing.module#YaLandingModule'
  },
  {
    path: 'error',
    data: {
      bgClass: 'bg-white'
    },
    component: YaErrorComponent
  }
];

@NgModule({
  declarations: [
    YaErrorComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    HeaderModule,
    RouterModule.forRoot(ROUTES, {
      useHash: true
    })
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
    , AjaxService
    , UtilService
    , ProfileService
    , AppraisalService
    , ActiveModelService
  ]
})
export class AppRoutingModule { }

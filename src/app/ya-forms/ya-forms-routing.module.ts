// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { YaFormsComponent } from './ya-forms.component';
import { YaDemographicsComponent } from './ya-demographics/ya-demographics.component';

// YA Routes
const ROUTES: Route[] = [{
  path: '',
  component: YaFormsComponent,
  children: [
    {
      path: '',
      redirectTo: 'demographics'
    },
    {
      path: 'demographics',
      component: YaDemographicsComponent
    },
    {
      path: 'housing',
      component: YaFormsComponent
    },
    {
      path: 'education',
      component: YaFormsComponent
    },
    {
      path: 'employment',
      component: YaFormsComponent
    },
    {
      path: 'interests',
      component: YaFormsComponent
    },
    {
      path: 'placements',
      component: YaFormsComponent
    },
    {
      path: 'parenting',
      component: YaFormsComponent
    },
    {
      path: 'health',
      component: YaFormsComponent
    },
    {
      path: 'relationships',
      component: YaFormsComponent
    },
    {
      path: 'criminal',
      component: YaFormsComponent
    },
    {
      path: 'skills',
      component: YaFormsComponent
    },
    {
      path: 'stipends',
      component: YaFormsComponent
    },
    {
      path: 'services',
      component: YaFormsComponent
    },
    {
      path: 'personal',
      component: YaFormsComponent
    },
    {
      path: 'actions',
      component: YaFormsComponent
    },
    {
      path: 'documents',
      component: YaFormsComponent
    },
    {
      path: 'review',
      component: YaFormsComponent
    }]
}];

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    YaFormsComponent,
    YaDemographicsComponent
  ],
  exports: [RouterModule]
})
export class YaFormsRoutingModule { }

// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { YaFormsComponent } from './ya-forms.component';
import { YaReviewComponent } from './ya-review/ya-review.component';
import { YaHealthComponent } from './ya-health/ya-health.component';
import { YaSkillsComponent } from './ya-skills/ya-skills.component';
import { YaActionsComponent } from './ya-actions/ya-actions.component';
import { YaHousingComponent } from './ya-housing/ya-housing.component';
import { YaStipendsComponent } from './ya-stipends/ya-stipends.component';
import { YaServicesComponent } from './ya-services/ya-services.component';
import { YaPersonalComponent } from './ya-personal/ya-personal.component';
import { YaCriminalComponent } from './ya-criminal/ya-criminal.component';
import { YaDocumentsComponent } from './ya-documents/ya-documents.component';
import { YaEducationComponent } from './ya-education/ya-education.component';
import { YaInterestsComponent } from './ya-interests/ya-interests.component';
import { YaParentingComponent } from './ya-parenting/ya-parenting.component';
import { YaEmploymentComponent } from './ya-employment/ya-employment.component';
import { YaPlacementsComponent } from './ya-placements/ya-placements.component';
import { YaDemographicsComponent } from './ya-demographics/ya-demographics.component';
import { YaRelationshipsComponent } from './ya-relationships/ya-relationships.component';

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
      component: YaHousingComponent
    },
    {
      path: 'education',
      component: YaEducationComponent
    },
    {
      path: 'employment',
      component: YaEmploymentComponent
    },
    {
      path: 'interests',
      component: YaInterestsComponent
    },
    {
      path: 'placements',
      component: YaPlacementsComponent
    },
    {
      path: 'parenting',
      component: YaParentingComponent
    },
    {
      path: 'health',
      component: YaHealthComponent
    },
    {
      path: 'relationships',
      component: YaRelationshipsComponent
    },
    {
      path: 'criminal',
      component: YaCriminalComponent
    },
    {
      path: 'skills',
      component: YaSkillsComponent
    },
    {
      path: 'stipends',
      component: YaStipendsComponent
    },
    {
      path: 'services',
      component: YaServicesComponent
    },
    {
      path: 'personal',
      component: YaPersonalComponent
    },
    {
      path: 'actions',
      component: YaActionsComponent
    },
    {
      path: 'documents',
      component: YaDocumentsComponent
    },
    {
      path: 'review',
      component: YaReviewComponent
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
    YaReviewComponent,
    YaHealthComponent,
    YaSkillsComponent,
    YaHousingComponent,
    YaActionsComponent,
    YaCriminalComponent,
    YaStipendsComponent,
    YaServicesComponent,
    YaPersonalComponent,
    YaDocumentsComponent,
    YaParentingComponent,
    YaEducationComponent,
    YaInterestsComponent,
    YaPlacementsComponent,
    YaEmploymentComponent,
    YaDemographicsComponent,
    YaRelationshipsComponent
  ],
  exports: [RouterModule]
})
export class YaFormsRoutingModule { }

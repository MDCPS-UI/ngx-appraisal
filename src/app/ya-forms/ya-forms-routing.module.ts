// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
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
      component: YaDemographicsComponent,
      data: {
        formName: 'Demographics'
      }
    },
    {
      path: 'housing',
      component: YaHousingComponent,
      data: {
        formName: 'Housing'
      }
    },
    {
      path: 'education',
      component: YaEducationComponent,
      data: {
        formName: 'Education'
      }
    },
    {
      path: 'employment',
      component: YaEmploymentComponent,
      data: {
        formName: 'Employment'
      }
    },
    {
      path: 'interests',
      component: YaInterestsComponent,
      data: {
        formName: 'Social Interests'
      }
    },
    {
      path: 'placements',
      component: YaPlacementsComponent,
      data: {
        formName: 'Placement & Safety'
      }
    },
    {
      path: 'parenting',
      component: YaParentingComponent,
      data: {
        formName: 'Pregnant/Parenting'
      }
    },
    {
      path: 'health',
      component: YaHealthComponent,
      data: {
        formName: 'Health'
      }
    },
    {
      path: 'relationships',
      component: YaRelationshipsComponent,
      data: {
        formName: 'Relationships'
      }
    },
    {
      path: 'criminal',
      component: YaCriminalComponent,
      data: {
        formName: 'Criminal Justice System'
      }
    },
    {
      path: 'skills',
      component: YaSkillsComponent,
      data: {
        formName: 'Life Skills'
      }
    },
    {
      path: 'stipends',
      component: YaStipendsComponent,
      data: {
        formName: 'Stipends'
      }
    },
    {
      path: 'services',
      component: YaServicesComponent,
      data: {
        formName: 'Continuing Support/Services'
      }
    },
    {
      path: 'personal',
      component: YaPersonalComponent,
      data: {
        formName: 'Personal'
      }
    },
    {
      path: 'actions',
      component: YaActionsComponent,
      data: {
        formName: 'Goals and Actions'
      }
    },
    {
      path: 'documents',
      component: YaDocumentsComponent,
      data: {
        formName: 'Received Documents'
      }
    },
    {
      path: 'review',
      component: YaReviewComponent,
      data: {
        formName: 'Review & Sign'
      }
    }]
}];

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    ReactiveFormsModule,
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

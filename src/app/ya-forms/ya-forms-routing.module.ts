// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { YaFormsComponent } from './ya-forms.component';

// YA Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaFormsComponent,
    children: [
      {
        path: '',
        redirectTo: 'demographics'
      },
      {
        path: 'demographics',
        loadChildren: './ya-demographics/ya-demographics.module#YaDemographicsModule',
        data: {
          formName: 'Demographics'
        }
      },
      {
        path: 'housing',
        loadChildren: './ya-housing/ya-housing.module#YaHousingModule',
        data: {
          formName: 'Housing'
        }
      },
      {
        path: 'education',
        loadChildren: './ya-education/ya-education.module#YaEducationModule',
        data: {
          formName: 'Education'
        }
      },
      {
        path: 'employment',
        loadChildren: './ya-employment/ya-employment.module#YaEmploymentModule',
        data: {
          formName: 'Employment'
        }
      },
      {
        path: 'interests',
        loadChildren: './ya-interests/ya-interests.module#YaInterestsModule',
        data: {
          formName: 'Social Interests'
        }
      },
      {
        path: 'placements',
        loadChildren: './ya-placements/ya-placements.module#YaPlacementsModule',
        data: {
          formName: 'Placement & Safety'
        }
      },
      {
        path: 'parenting',
        loadChildren: './ya-parenting/ya-parenting.module#YaParentingModule',
        data: {
          formName: 'Pregnant/Parenting'
        }
      },
      {
        path: 'health',
        loadChildren: './ya-health/ya-health.module#YaHealthModule',
        data: {
          formName: 'Health'
        }
      },
      {
        path: 'relationships',
        loadChildren: './ya-relationships/ya-relationships.module#YaRelationshipsModule',
        data: {
          formName: 'Relationships'
        }
      },
      {
        path: 'criminal',
        loadChildren: './ya-criminal/ya-criminal.module#YaCriminalModule',
        data: {
          formName: 'Criminal Justice System'
        }
      },
      {
        path: 'skills',
        loadChildren: './ya-skills/ya-skills.module#YaSkillsModule',
        data: {
          formName: 'Life Skills'
        }
      },
      {
        path: 'stipends',
        loadChildren: './ya-stipends/ya-stipends.module#YaStipendsModule',
        data: {
          formName: 'Stipends'
        }
      },
      {
        path: 'services',
        loadChildren: './ya-services/ya-services.module#YaServicesModule',
        data: {
          formName: 'Continuing Support/Services'
        }
      },
      {
        path: 'personal',
        loadChildren: './ya-personal/ya-personal.module#YaPersonalModule',
        data: {
          formName: 'Personal'
        }
      },
      {
        path: 'actions',
        loadChildren: './ya-actions/ya-actions.module#YaActionsModule',
        data: {
          formName: 'Goals and Actions'
        }
      },
      {
        path: 'documents',
        loadChildren: './ya-documents/ya-documents.module#YaDocumentsModule',
        data: {
          formName: 'Received Documents Upon Release from Custody'
        }
      },
      {
        path: 'review',
        loadChildren: './ya-review/ya-review.module#YaReviewModule',
        data: {
          formName: 'Review & Sign'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    YaFormsComponent
  ],
  exports: [RouterModule]
})
export class YaFormsRoutingModule { }

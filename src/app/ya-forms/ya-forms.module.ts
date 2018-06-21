import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YaFormsRoutingModule } from './ya-forms-routing.module';
import { YaHousingComponent } from './ya-housing/ya-housing.component';
import { YaEducationComponent } from './ya-education/ya-education.component';
import { YaEmploymentComponent } from './ya-employment/ya-employment.component';
import { YaInterestsComponent } from './ya-interests/ya-interests.component';
import { YaPlacementsComponent } from './ya-placements/ya-placements.component';
import { YaParentingComponent } from './ya-parenting/ya-parenting.component';
import { YaHealthComponent } from './ya-health/ya-health.component';
import { YaRelationshipsComponent } from './ya-relationships/ya-relationships.component';
import { YaCriminalComponent } from './ya-criminal/ya-criminal.component';
import { YaSkillsComponent } from './ya-skills/ya-skills.component';
import { YaStipendsComponent } from './ya-stipends/ya-stipends.component';
import { YaServicesComponent } from './ya-services/ya-services.component';
import { YaPersonalComponent } from './ya-personal/ya-personal.component';

@NgModule({
  imports: [
    CommonModule,
    YaFormsRoutingModule
  ],
  declarations: [YaHousingComponent, YaEducationComponent, YaEmploymentComponent, YaInterestsComponent, YaPlacementsComponent, YaParentingComponent, YaHealthComponent, YaRelationshipsComponent, YaCriminalComponent, YaSkillsComponent, YaStipendsComponent, YaServicesComponent, YaPersonalComponent]
})
export class YaFormsModule { }

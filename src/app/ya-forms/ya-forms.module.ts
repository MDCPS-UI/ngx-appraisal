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

@NgModule({
  imports: [
    CommonModule,
    YaFormsRoutingModule
  ],
  declarations: [YaHousingComponent, YaEducationComponent, YaEmploymentComponent, YaInterestsComponent, YaPlacementsComponent, YaParentingComponent, YaHealthComponent, YaRelationshipsComponent]
})
export class YaFormsModule { }

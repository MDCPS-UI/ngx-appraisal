import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YaFormsRoutingModule } from './ya-forms-routing.module';
import { YaHousingComponent } from './ya-housing/ya-housing.component';
import { YaEducationComponent } from './ya-education/ya-education.component';
import { YaEmploymentComponent } from './ya-employment/ya-employment.component';

@NgModule({
  imports: [
    CommonModule,
    YaFormsRoutingModule
  ],
  declarations: [YaHousingComponent, YaEducationComponent, YaEmploymentComponent]
})
export class YaFormsModule { }

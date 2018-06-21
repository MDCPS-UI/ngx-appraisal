import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YaFormsRoutingModule } from './ya-forms-routing.module';
import { YaHousingComponent } from './ya-housing/ya-housing.component';

@NgModule({
  imports: [
    CommonModule,
    YaFormsRoutingModule
  ],
  declarations: [YaHousingComponent]
})
export class YaFormsModule { }

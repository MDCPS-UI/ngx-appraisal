// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BaseFormModule } from './../../shared/components/base-form/base-form.module';

// Components
import { YaPlacementsComponent } from './ya-placements.component';
import { MaterialModule } from './../../shared/modules/material/material.module';

// YA Placements Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaPlacementsComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    BaseFormModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    YaPlacementsComponent
  ],
  exports: [RouterModule]
})
export class YaPlacementsModule { }

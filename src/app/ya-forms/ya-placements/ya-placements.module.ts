// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BaseFormModule } from './../../shared/components/base-form/base-form.module';

// Components
import { YaPlacementsComponent } from './ya-placements.component';

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
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    YaPlacementsComponent
  ],
  exports: [RouterModule]
})
export class YaPlacementsModule { }

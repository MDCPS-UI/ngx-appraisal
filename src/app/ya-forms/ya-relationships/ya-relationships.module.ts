// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BaseFormModule } from './../../shared/components/base-form/base-form.module';

// Components
import { YaRelationshipsComponent } from './ya-relationships.component';

// YA Relationships Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaRelationshipsComponent
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
    YaRelationshipsComponent
  ],
  exports: [RouterModule]
})
export class YaRelationshipsModule { }

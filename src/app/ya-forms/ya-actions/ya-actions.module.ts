// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BaseFormModule } from './../../shared/components/base-form/base-form.module';

// Components
import { YaActionsComponent } from './ya-actions.component';

// YA Action Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaActionsComponent
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
    YaActionsComponent
  ],
  exports: [RouterModule]
})
export class YaActionsModule { }

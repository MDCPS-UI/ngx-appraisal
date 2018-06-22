// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { YaActionsComponent } from './ya-actions.component';
import { BaseFormComponent } from './../../shared/components/base-form/base-form.component';

// YA Action Form Routes
const ACTION_FORM_ROUTES: Route[] = [
  {
    path: '',
    component: YaActionsComponent
  }
];

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ACTION_FORM_ROUTES)
  ],
  declarations: [
    BaseFormComponent,
    YaActionsComponent
  ],
  exports: [RouterModule]
})
export class YaActionsModule { }

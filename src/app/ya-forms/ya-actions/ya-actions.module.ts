// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { YaActionsComponent } from './ya-actions.component';

// YA Action Form Routes
const ROUTES: Route[] = [
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
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    YaActionsComponent
  ],
  exports: [RouterModule]
})
export class YaActionsModule { }

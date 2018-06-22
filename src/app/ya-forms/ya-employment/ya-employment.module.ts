// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { YaEmploymentComponent } from './ya-employment.component';

// YA Employment Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaEmploymentComponent
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
    YaEmploymentComponent
  ],
  exports: [RouterModule]
})
export class YaEmploymentModule { }

// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BaseFormModule } from './../../shared/components/base-form/base-form.module';

// Components
import { YaReviewComponent } from './ya-review.component';

// YA Review Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaReviewComponent
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
    YaReviewComponent
  ],
  exports: [RouterModule]
})
export class YaReviewModule { }

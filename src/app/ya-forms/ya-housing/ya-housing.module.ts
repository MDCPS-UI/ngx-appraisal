// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BaseFormModule } from './../../shared/components/base-form/base-form.module';

// Components
import { YaHousingComponent } from './ya-housing.component';

// YA Housing Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaHousingComponent
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
    YaHousingComponent
  ],
  exports: [RouterModule]
})
export class YaHousingModule { }

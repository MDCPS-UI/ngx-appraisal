// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BaseFormModule } from './../../shared/components/base-form/base-form.module';

// Components
import { YaPersonalComponent } from './ya-personal.component';

// YA Personal Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaPersonalComponent
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
    YaPersonalComponent
  ],
  exports: [RouterModule]
})
export class YaPersonalModule { }

// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { YaEducationComponent } from './ya-education.component';

// YA Education Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaEducationComponent
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
    YaEducationComponent
  ],
  exports: [RouterModule]
})
export class YaEducationModule { }

// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { YaInterestsComponent } from './ya-interests.component';

// YA Interests Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaInterestsComponent
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
    YaInterestsComponent
  ],
  exports: [RouterModule]
})
export class YaInterestsModule { }

// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { YaPlacementsComponent } from './ya-placements.component';

// YA Placements Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaPlacementsComponent
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
    YaPlacementsComponent
  ],
  exports: [RouterModule]
})
export class YaPlacementsModule { }

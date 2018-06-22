// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { YaCriminalComponent } from './ya-criminal.component';

// YA Criminal Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaCriminalComponent
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
    YaCriminalComponent
  ],
  exports: [RouterModule]
})
export class YaCriminalModule { }

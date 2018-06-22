// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { YaPersonalComponent } from './ya-personal.component';

// YA Personal Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaPersonalComponent
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
    YaPersonalComponent
  ],
  exports: [RouterModule]
})
export class YaPersonalModule { }

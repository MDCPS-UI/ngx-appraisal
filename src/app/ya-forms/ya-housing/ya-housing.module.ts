// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { YaHousingComponent } from './ya-housing.component';

// YA Housing Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaHousingComponent
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
    YaHousingComponent
  ],
  exports: [RouterModule]
})
export class YaHousingModule { }

// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { YaServicesComponent } from './ya-services.component';

// YA Services Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaServicesComponent
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
    YaServicesComponent
  ],
  exports: [RouterModule]
})
export class YaServicesModule { }

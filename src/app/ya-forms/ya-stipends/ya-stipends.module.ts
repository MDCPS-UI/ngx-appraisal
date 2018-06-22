// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { YaStipendsComponent } from './ya-stipends.component';

// YA Stipends Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaStipendsComponent
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
    YaStipendsComponent
  ],
  exports: [RouterModule]
})
export class YaStipendsModule { }

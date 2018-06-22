// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { YaParentingComponent } from './ya-parenting.component';

// YA Parenting Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaParentingComponent
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
    YaParentingComponent
  ],
  exports: [RouterModule]
})
export class YaParentingModule { }

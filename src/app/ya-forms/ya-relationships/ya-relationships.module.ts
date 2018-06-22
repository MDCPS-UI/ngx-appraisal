// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { YaRelationshipsComponent } from './ya-relationships.component';

// YA Relationships Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaRelationshipsComponent
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
    YaRelationshipsComponent
  ],
  exports: [RouterModule]
})
export class YaRelationshipsModule { }

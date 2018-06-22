// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { YaSkillsComponent } from './ya-skills.component';

// YA Skills Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaSkillsComponent
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
    YaSkillsComponent
  ],
  exports: [RouterModule]
})
export class YaSkillsModule { }

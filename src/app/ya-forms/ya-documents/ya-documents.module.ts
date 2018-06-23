// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BaseFormModule } from './../../shared/components/base-form/base-form.module';

// Components
import { YaDocumentsComponent } from './ya-documents.component';

// YA Criminal Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaDocumentsComponent
  }
];

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    BaseFormModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    YaDocumentsComponent
  ],
  exports: [RouterModule]
})
export class YaDocumentsModule { }

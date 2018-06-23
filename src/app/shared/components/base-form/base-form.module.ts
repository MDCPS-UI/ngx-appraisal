import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseFormComponent } from './base-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [BaseFormComponent],
  declarations: [BaseFormComponent]
})
export class BaseFormModule { }

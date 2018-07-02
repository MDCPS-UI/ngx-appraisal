import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from './date-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
  imports: [
    NgbModule
    , FormsModule
    , CommonModule
    , ReactiveFormsModule
  ],
  exports: [
    DatePickerComponent
  ],
  declarations: [
    DatePickerComponent
  ]
})
export class DatePickerModule { }

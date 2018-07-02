import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerAdapterService } from './../../services/date-picker-adapter/date-picker-adapter.service';

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
  ],
  providers: [
    {
      provide: NgbDateAdapter,
      useClass: DatePickerAdapterService
    }
  ]
})
export class DatePickerModule { }

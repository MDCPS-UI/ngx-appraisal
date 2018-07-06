import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerAdapterService, DatePickerFormatterService } from './../../services/date-picker/';


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
    },
    {
      provide: NgbDateParserFormatter,
      useClass: DatePickerFormatterService
    }
  ]
})
export class DatePickerModule { }

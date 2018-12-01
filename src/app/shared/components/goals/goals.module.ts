import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsComponent } from './goals.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from './../date-picker/date-picker.module';
import { MaterialModule } from './../../modules/material/material.module';

@NgModule({
    imports: [
        CommonModule
        , MaterialModule
        , DatePickerModule
        , ReactiveFormsModule
    ],
    declarations: [
        GoalsComponent
    ],
    exports: [
        GoalsComponent
    ]
})

export class GoalsModule { }

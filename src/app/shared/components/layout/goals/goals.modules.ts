import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsComponent } from './goals.component';
import { MaterialModule } from './../../../modules/material/material.module';

@NgModule({
    imports: [
        CommonModule
        , MaterialModule
    ],
    declarations: [
        GoalsComponent
    ],
    exports: [
        GoalsComponent
    ]
})

export class GoalsModule { }
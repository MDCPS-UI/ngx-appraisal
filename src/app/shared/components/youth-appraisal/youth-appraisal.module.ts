import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { YouthAppraisalComponent } from './youth-appraisal.component';
import { MaterialModule } from './../../modules/material/material.module';

@NgModule({
    imports: [
        CommonModule
        , MaterialModule
        , NgbTypeaheadModule
        , ReactiveFormsModule
    ],
    declarations: [
        YouthAppraisalComponent
    ],
    exports: [
        YouthAppraisalComponent
    ]
})
export class YaModule { }

import {
  MatCardModule,
  MatSortModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatRadioModule,
  MatInputModule,
  MatTableModule,
  MatButtonModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";

// load all the modules that need to imported and exported
const Modules: any[] = [
    MatIconModule
  , MatCardModule
  , MatSortModule
  , MatListModule
  , MatMenuModule
  , MatRadioModule
  , MatInputModule
  , MatTableModule
  , MatButtonModule
  , MatSelectModule
  , MatSidenavModule
  , MatToolbarModule
  , MatCheckboxModule
  , MatFormFieldModule
  , MatPaginatorModule
  , MatExpansionModule
  , MatSlideToggleModule
  , MatProgressSpinnerModule
];

@NgModule({
  imports: [
      ...Modules
    , CommonModule
    , FlexLayoutModule
  ],
  exports: [...Modules]
})
export class MaterialModule { }

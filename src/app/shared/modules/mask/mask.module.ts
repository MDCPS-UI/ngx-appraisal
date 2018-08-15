import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from './../../services/dom/dom-handler.service';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { InputTextkDirective } from './input-mask/input-text.directive';

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InputMaskComponent,
    InputTextkDirective
  ],
  exports: [
    InputMaskComponent,
    InputTextkDirective
  ],
  providers: [
    DomHandler
  ]
})
export class MaskModule { }

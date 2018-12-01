import { NgModel } from '@angular/forms';
import { Directive, ElementRef, HostListener, DoCheck, Optional } from '@angular/core';

@Directive({
    selector: '[pInputText]',
    host: {
        '[class.ui-inputtext]': 'true',
        '[class.ui-corner-all]': 'true',
        '[class.ui-state-default]': 'true',
        '[class.ui-widget]': 'true',
        '[class.ui-state-filled]': 'filled'
    }
})

export class InputTextkDirective implements DoCheck {

    public filled: boolean;

    /**
     * @constructor
     * @param: {el<ElementRef>}
     * @param: {ngModel<NgModel>}
     */
    constructor(public el: ElementRef,
        @Optional() public ngModel: NgModel) { }

    // to trigger change detection to manage ui-state-filled
    // for material labels when there is no value binding
    @HostListener('input', ['$event'])
    public onInput(e: Event): void {
        this.updateFilledState();
    }

    /**
     *  @public
     *  @type: method<life cycle hook>
     *  @return: void
     *  @description: N/A
     */
    public ngDoCheck(): void {
        this.updateFilledState();
    }

    /**
     * @public
     * @return: void
     * @description: a helper function that sets the definitions
     * for masking.
     */
    public updateFilledState(): void {
        this.filled = (this.el.nativeElement.value
            && this.el.nativeElement.value.length)
            || (this.ngModel && this.ngModel.model);
    }
}

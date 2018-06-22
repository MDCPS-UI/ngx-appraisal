import { FormGroup, AbstractControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * @interface
 */
interface BaseFormEvent {
  e?: any;
  form: FormGroup;
  value: AbstractControl;
};

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'mdcps-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss']
})
export class BaseFormComponent implements OnInit {
  /**
   * @public
   */
  @Input()
  public baseFormGroup: FormGroup;

  /**
   * @public
   */
  @Input()
  public config: any = {};

  /**
   * @public
   */
  @Output()
  public next: EventEmitter<BaseFormEvent> = new EventEmitter<BaseFormEvent>();

  /**
   * @public
   */
  @Output()
  public previous: EventEmitter<BaseFormEvent> = new EventEmitter<BaseFormEvent>();

  /**
   * @constructor
   */
  constructor() { }

  /**
   * @public
   */
  public ngOnInit(): void { }

  /**
   * @public
   */
  public onNext(form: FormGroup, value: any): void {
    this.next.emit({
      form: form,
      value: value
    });
  }

  /**
   * @public
   */
  public onPrevious(e: MouseEvent): void {
    this.previous.emit({e: e,
      form: this.baseFormGroup,
      value: this.baseFormGroup.value
    });
  }
}

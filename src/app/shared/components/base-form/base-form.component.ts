import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ProfileService, MdcpsNavigationEvent } from './../../services/profile/profile.service';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

/**
 * @interface
 */
interface BaseFormEvent {
  e?: any;
  form: FormGroup;
  value: AbstractControl;
};


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
  @ViewChild('content')
  public content: ElementRef;

  /**
   * @public
   */
  public navEvent: MdcpsNavigationEvent;

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
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private profileService: ProfileService) {
    this.subscribeToNavigationReq();
  }

  /**
   * @public
   */
  public ngOnInit(): void { }

  /**
   * @public
   */
  public onNext(form?: FormGroup, value?: any): void {
    this.baseFormGroup.reset();
    this.next.emit({
      form: form || this.baseFormGroup,
      value: value || this.baseFormGroup.value
    });
  }

  /**
   * @public
   */
  public onPrevious(e?: MouseEvent): void {
    this.baseFormGroup.reset();
    this.previous.emit({
      e: e,
      form: this.baseFormGroup,
      value: this.baseFormGroup.value
    });
  }

  /**
   * @public
   */
  public subscribeToNavigationReq(): void {
    this.profileService.getNavigation()
      .subscribe((config: MdcpsNavigationEvent) => {
        this.navEvent = config;

        // in case if the form is dirty, prompt
        // user to save or discard it.
        if (this.baseFormGroup && this.baseFormGroup.dirty) {
          this.openVerticallyCentered(this.content);
        } else {
          this.proceedWithNavigation(config);
        }
      });
  }

  /**
   * @public
   */
  public proceedWithNavigation(config?: MdcpsNavigationEvent): void {
    config = config || this.navEvent;

    // construct the navigation url
    const url: string = ((config.routePrefix || '')
      + config.navigationUrl + (config.routeSuffix || ''));

    // navigate to the requested route
    this.baseFormGroup.reset();
    this.router.navigate([url], {queryParamsHandling: 'merge', preserveQueryParams: true});
  }

  /**
   * @public
   */
  public openVerticallyCentered(content: any) {
    this.modalService.open(content, {
      centered: true,
      windowClass: 'mdcps-modal'
    });
  }

  /**
   * @public
   */
  public onAction(dismiss: Function, action: string): void {
    if (action == 'save') {
      dismiss('save');
      this.onNext();
    } else if (action == 'discard') {
      dismiss('discard');
      this.proceedWithNavigation();
    }
  }
}

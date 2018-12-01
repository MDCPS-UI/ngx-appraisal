import {
  Input,
  Output,
  OnInit,
  ViewChild,
  Component,
  forwardRef,
  ElementRef,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';
import { DomHandler } from './../../../services/dom/dom-handler.service';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

// access the native document object
declare const document: any;

export const INPUTMASK_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputMaskComponent),
  multi: true
};

@Component({
  selector: 'mdcps-input-mask',
  styles: [``],
  template: `
  <input #input pInputText
    [attr.class]="styleClass || ''"
    [attr.id]="inputId"
    [attr.type]="type"
    [attr.name]="name"
    [ngStyle]="style"
    [attr.placeholder]="placeholder"
    [attr.size]="size"
    [attr.maxlength]="maxlength"
    [attr.tabindex]="tabindex"
    [disabled]="disabled"
    [readonly]="readonly"
    [attr.required]="required"
    (focus)="onInputFocus($event)"
    (blur)="onInputBlur($event)"
    (keydown)="onKeyDown($event)"
    (keypress)="onKeyPress($event)"
    (input)="onInput($event)"
    (paste)="handleInputChange($event)"
  >`,
  host: {
    '[class.ui-inputwrapper-filled]': 'filled',
    '[class.ui-inputwrapper-focus]': 'focus'
  },
  encapsulation: ViewEncapsulation.None,
  providers: [INPUTMASK_VALUE_ACCESSOR]
})

export class InputMaskComponent implements OnInit, ControlValueAccessor {
  /**
   * @type: string
   * @default: 'text'
   * @description: sets the input type attribute,
   * @support: all HTML5 input types.
   */
  @Input()
  public type = 'text';

  /**
   * @type: string
   * @default: '_'
   * @description: a delimeter for text formatting
   * Underscore is the default placeholder for a mask
   * and this can be customized using slotChart option.
   *
   * @example:
   * `<cvs-input-mask [mask]="'(000)-000-0000'" [slotChar]="'.'"></cvs-input-mask>`
   */
  @Input()
  public slotChar = '_';

  /**
   * @type: boolean
   * @default: true
   * @default: true
   * @description: clears the incomplete input value on blur.
   */
  @Input()
  public autoClear = true;

  /**
   * @default: null
   * @type: string
   * @description: applies styling to the input field.
   */
  @Input()
  public style: string;

  /**
   * @type: string
   * @default: null
   * @description: identifier of the focus input to match
   * a label defined for the component.
   */
  @Input()
  public inputId: string;

  /**
   * @type: string
   * @default: null
   * @description: style class/classes of the input field.
   */
  @Input()
  public styleClass: string;

  /**
   * @type: string
   * @default: null
   * @description: advisory information to display on input.
   */
  @Input()
  public placeholder: string;

  /**
   * @type: number
   * @default: null
   * @description: size of the input field.
   */
  @Input()
  public size: number;

  /**
   * @type: boolean
   * @default: null
   * @description: defines if ngModel sets the raw unmasked value
   * to bound value or the formatted mask value.
   */
  @Input()
  public unmask: boolean;

  /**
   * @type: string
   * @default: null
   * @description: name of the input field.
   */
  @Input()
  public name: string;

  /**
   * @type: string
   * @default: null
   * @description: specifies tab order of the element.
   */
  @Input()
  public tabindex: string;

  /**
   * @type: number
   * @default: null
   * @description: maximum number of character allows
   * in the input field.
   */
  @Input()
  public maxlength: number;

  /**
   * @type: boolean
   * @default: null
   * @description: when present, it specifies that the element
   * value cannot be altered.
   */
  @Input()
  public disabled: boolean;

  /**
   * @type: boolean
   * @default: null
   * @description: when present, it specifies that an
   * input field is read-only.
   */
  @Input()
  public readonly: boolean;

  /**
   * @type: boolean
   * @description: identifier of the focus input to match
   * a label defined for the component.
   */
  @Input()
  public required: boolean;

  /**
   * @type: string
   * @default: [A-Za-z]
   * @description: Regex pattern for alpha characters.
   */
  @Input()
  public characterPattern = '[A-Za-z]';

  /**
   * @type: ElementRef
   * @description: reference to the input field
   */
  @ViewChild('input')
  private inputViewChild: ElementRef;

  /**
   * @type: EventEmitter<Event>
   * @description: callback to invoke when input loses focus.
   */
  @Output('blur')
  public onBlur: EventEmitter<Event> = new EventEmitter<Event>();

  /**
   * @type: EventEmitter<Event>
   * @description: callback to invoke on when user enters in the input field.
   * @alias: input event
   */
  @Output()
  public enter: EventEmitter<Event> = new EventEmitter<Event>();

  /**
   * @type: EventEmitter<Event>
   * @description: callback to invoke when input receives focus.
   */
  @Output('focus')
  public onFocus: EventEmitter<Event> = new EventEmitter<Event>();

  /**
   * @type: EventEmitter<Event>
   * @description: callback to invoke on when user completes the mask pattern.
   */
  @Output('complete')
  public onComplete: EventEmitter<Event> = new EventEmitter<Event>();

  public defs: any;
  public value: any;
  public buffer: any;
  public len: number;
  public tests: any[];
  public _mask: string;
  public focus: boolean;
  public oldVal: string;
  public filled: boolean;
  public focusText: string;
  public caretTimeoutId: any;
  public el: HTMLInputElement;
  public partialPosition: any;
  public defaultBuffer: string;
  public isAndroidChrome: boolean;
  public firstNonMaskPos: number;
  public lastRequiredNonMaskPos: any;
  public onModelChange: Function = () => { };
  public onModelTouched: Function = () => { };

  /**
   * @type: string
   * @return: string
   * @description: get accessor for mask
   */
  @Input()
  get mask(): string {
    return this._mask;
  }

  /**
   * @param: {val<string>}
   * @description: set accessor for mask
   */
  set mask(val: string) {
    // set the mask value to the current value
    this._mask = val;

    // proceed with masking
    this.initMask();
    this.writeValue('');
    this.onModelChange(this.value);
  }

  /**
   * @constructor
   * @param: {domHandler<DomHandler>}
   */
  constructor(public domHandler: DomHandler) { }

  /**
   *  @public
   *  @type: method<life cycle hook>
   *  @return: void
   *  @description: N/A
   */
  public ngOnInit(): void {
    // check to see if the current browser is an android chrome
    this.checkForAndroidChrome();

    // a short-hand to the input element to keep the code clean
    this.el = this.inputViewChild.nativeElement;

    // initialize masking operation
    this.initMask();
  }

  /**
   * @public
   * @return: boolean -> true - if the currect browser is an
   * android chrome.
   *
   * @description: a helper function that checks if the current
   * browser is an android chrome and sets the same to the scope
   * variable `isAndroidChrome`
   */
  public checkForAndroidChrome(): boolean {
    const ua = this.domHandler.getUserAgent();

    // check if the current browser is an android chrome
    this.isAndroidChrome = /chrome/i.test(ua) && /android/i.test(ua);
    return this.isAndroidChrome;
  }

  /**
   * @public
   * @return: void
   * @description: a helper function that sets the definitions
   * for masking.
   */
  public setDefinitions(): void {
    this.defs = {
      '9': '[0-9]',
      'a': this.characterPattern,
      '*': `${this.characterPattern}|[0-9]`
    };
  }

  /**
   * @public
   * @param: {maskTokens<string[]>}
   * @return: void
   * @description: a helper function that generates a list of
   * RegExp tests list based on the mask.
   *
   * @example:
   * For a mask like -> (999) -> it generates the list below:
   *
   * sets null   -> if it's a masked symbol
   * sets RegExp -> if the number/alphabet matches the definitions
   * `
   * [null, /[0-9]/, /[0-9]/, /[0-9]/, null]
   * `
   */
  public processTests(maskTokens: string[]): void {
    this.tests = [];

    for (let i = 0; i < maskTokens.length; i++) {
      // get the token at the current index
      const token: string = maskTokens[i];

      // in case if the token is a question mark, do not
      // consider it
      if (token == '?') {
        this.len--;
        this.partialPosition = i;

        // if the current token falls under one of the definitions
        // generate a regular expression for that token and add it
        // to the tests list
      } else if (this.defs[token]) {
        this.tests.push(new RegExp(this.defs[token]));

        // update mask positions for the same
        // sets the positions for the valid characters
        this.updateMaskPositions(i);
      } else {
        this.tests.push(null);
      }
    }
  }

  /**
   * @public
   * @param: {idx<number>} - active index
   * @return: void
   * @description: a helper function that sets the first non-mask position
   * & last requried non mask position.
   */
  public updateMaskPositions(idx: number): void {
    if (this.firstNonMaskPos === null) {
      this.firstNonMaskPos = this.tests.length - 1;
    }

    if (idx < this.partialPosition) {
      this.lastRequiredNonMaskPos = this.tests.length - 1;
    }
  }

  /**
   * @public
   * @param: {maskTokens<string[]>}
   * @return: void
   * @description: a helper function that generates a list of
   * buffers with the help of placeholders `slotChar`.
   *
   * @example:
   * For a mask like -> (999) -> it generates the list below:
   *
   * sets RegExp -> if the number/alphabet matches the definitions
   * `
   * ['(', '_', '_', '_', ')']
   * `
   */
  public processBuffers(maskTokens: string[]): void {
    this.buffer = [];
    for (let i = 0; i < maskTokens.length; i++) {
      const token: string = maskTokens[i];

      if (token != '?') {

        // if the current token exists in the definitions
        // replace the token with the corresponding regular
        // expression pattern
        if (this.defs[token]) {
          this.buffer.push(this.getPlaceholder(i));
        } else {
          // if the token isn't an alphabet/number, add it to
          // the list as it is.
          this.buffer.push(token);
        }
      }
    }

    // join the list of buffers to generate a consolidated buffer
    this.defaultBuffer = this.buffer.join('');
  }

  /**
   * @public
   * @return: void
   * @description: an initializer for masking.
   */
  public initMask(): void {
    this.tests = [];

    // get the partial position from the mask
    this.partialPosition = this.mask.length;

    // get the length of the mask
    this.len = this.mask.length;

    // initialize the first non-mask position
    this.firstNonMaskPos = null;

    // set mask definitions
    this.setDefinitions();

    // split mask string to genarate mask tokens
    const maskTokens = this.mask.split('');

    // generate RegExp lists based on the mask pattern
    this.processTests(maskTokens);
    this.processBuffers(maskTokens);
  }

  /**
   * @public
   * @param: {value<any>}
   * @return: void
   * @description: a handler that writes the new value to
   * the input field.
   */
  public writeValue(value: any): void {
    // set the new value
    this.value = value;

    // only proceed if the native element exists
    if (this.el) {
      this.el.value = this.value || '';
      this.checkVal();
      this.focusText = this.el.value;
      this.updateFilledState();
    }
  }

  /**
   * @public
   * @param: {fn<Function>}
   * @return: void
   * @description: a value accessor register on change handler.
   */
  public registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }

  /**
   * @public
   * @param: {fn<Function>}
   * @return: void
   * @description: a value accessor register on touch handler.
   */
  public registerOnTouched(fn: Function): void {
    this.onModelTouched = fn;
  }

  /**
   * @public
   * @param: {val<boolean>}
   * @return: void
   * @description: a helper function that sets the
   * input disable state.
   */
  public setDisabledState(val: boolean): void {
    this.disabled = val;
  }

  /**
   * @public
   * @param: {first<number>}
   * @param: {last<number>}
   * @return: any
   * @description: a helper function that returns the start and end positions
   * of the caret.
   */
  public caret(first?: number, last?: number): any {
    let range, begin, end;

    if (!this.el.offsetParent
      || this.el !== document.activeElement) {
      return;
    }

    if (typeof first == 'number') {
      begin = first;
      end = (typeof last === 'number') ? last : begin;
      if (this.el.setSelectionRange) {
        this.el.setSelectionRange(begin, end);
      } else if (this.el['createTextRange']) {
        range = this.el['createTextRange']();
        range.collapse(true);
        range.moveEnd('character', end);
        range.moveStart('character', begin);
        range.select();
      }
    } else {
      if (this.el.setSelectionRange) {
        begin = this.el.selectionStart;
        end = this.el.selectionEnd;
      } else if (document['selection'] && document['selection'].createRange) {
        range = document['selection'].createRange();
        begin = 0 - range.duplicate().moveStart('character', -100000);
        end = begin + range.text.length;
      }

      return { begin: begin, end: end };
    }
  }

  /**
   * @public
   * @return: boolean - true -> if the masking is completed
   * @description: a helper function that checks if the masking
   * operation is completed and returns true if it did.
   */
  public isCompleted(): boolean {
    for (let i = this.firstNonMaskPos;
      i <= this.lastRequiredNonMaskPos; i++) {

      const phr: any = this.getPlaceholder(i);
      if (this.tests[i] && this.buffer[i] === phr) {
        return false;
      }
    }
    return true;
  }

  /**
   * @public
   * @param: {idx<number>}
   * @return: string - placeholder token
   * @description: returns the placeholder to display
   * on in place of the actual number/alphabet
   */
  public getPlaceholder(idx: number): string {
    // if the slotChar length is greater than
    // the current index, return the slot char at
    // for the current index.
    if (idx < this.slotChar.length) {
      return this.slotChar.charAt(idx);
    }

    // if the index is same as the slot character length
    // return the character at zeroth index.
    return this.slotChar.charAt(0);
  }

  /**
   * @public
   * @param: {pos<number>}
   * @return: {pos<number>}
   * @description: a helper function that retruns the position
   * of th next buffer.
   */
  public seekNext(pos: number): any {
    while (++pos < this.len && !this.tests[pos]) { }
    return pos;
  }

  /**
   * @public
   * @param: {pos<number>}
   * @return: {pos<number>}
   * @description: a helper function that retruns the position
   * of th previous buffer.
   */
  public seekPrev(pos: number): any {
    while (--pos >= 0 && !this.tests[pos]) { }
    return pos;
  }

  /**
   * @public
   * @param: {begin<number>} - begin number
   * @param: {end<number>} - end number
   * @return: void
   * @description: a helper function that helps with caret
   * positioning.
   */
  public shiftL(begin: number, end: number): void {
    // do not proceed further if the begin value is below `0`
    if (begin < 0) { return; }

    let i, j;
    for (i = begin, j = this.seekNext(end); i < this.len; i++) {
      if (this.tests[i]) {
        if (j < this.len && this.tests[i].test(this.buffer[j])) {
          this.buffer[i] = this.buffer[j];
          this.buffer[j] = this.getPlaceholder(j);
        } else {
          break;
        }
        j = this.seekNext(j);
      }
    }
    this.writeBuffer();
    this.caret(Math.max(this.firstNonMaskPos, begin));
  }

  /**
   * @public
   * @param: {pos<number>}
   * @return: void
   * @description: a helper function that helps with caret
   * positioning.
   */
  public shiftR(pos: number): void {
    let i, c, j, t;

    // get the placeholder position
    const placeholder: any = this.getPlaceholder(pos);
    for (i = pos, c = placeholder; i < this.len; i++) {
      if (this.tests[i]) {
        j = this.seekNext(i);
        t = this.buffer[i];
        this.buffer[i] = c;

        if (j < this.len && this.tests[j].test(t)) {
          c = t;
        } else {
          break;
        }
      }
    }
  }

  /**
   * @public
   * @param: {e<Event>}
   * @return: void
   * @description: an input handler
   */
  public handleAndroidInput(e: Event): void {
    const curVal = this.el.value;
    const pos = this.caret();

    if (this.oldVal && this.oldVal.length
      && this.oldVal.length > curVal.length) {
      // a deletion or backspace happened
      this.checkVal(true);
      while (pos.begin > 0 && !this.tests[pos.begin - 1]) {
        pos.begin--;
      }
      if (pos.begin === 0) {
        while (pos.begin < this.firstNonMaskPos && !this.tests[pos.begin]) {
          pos.begin++;
        }
      }
      this.caret(pos.begin, pos.begin);
    } else {
      this.checkVal(true);
      const newPos = this.seekNext(pos.begin);

      setTimeout(() => this.caret(newPos, newPos));
    }

    setTimeout(() => {
      this.updateModel(e);
      if (this.isCompleted()) {
        this.onComplete.emit();
      }
    }, 0);
  }

  /**
   * @public
   * @param: {e<Event | ClipboardEvent>}
   * @return: void
   * @description: an input handler
   */
  public onInputBlur(e): void {
    this.focus = false;
    this.onModelTouched();
    this.checkVal();
    this.updateModel(e);
    this.updateFilledState();
    this.onBlur.emit(e);

    if (this.el.value != this.focusText) {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('change', true, false);
      this.el.dispatchEvent(event);
    }
  }

  /**
   * @public
   * @param: {e<EKeyboardEvent>}
   * @return: void
   * @description: an event handler that get called on
   * keydown event.
   */
  public onKeyDown(e: KeyboardEvent): void {
    // do not proceed if the input field is read only.
    if (this.readonly) { return; }

    let pos, begin, end;
    const k = e.which || e.keyCode;

    const iPhone = /iphone/i.test(this.domHandler.getUserAgent());
    this.oldVal = this.el.value;

    // backspace, delete, and escape get special treatment
    if (k === 8 || k === 46 || (iPhone && k === 127)) {
      pos = this.caret();
      begin = pos.begin;
      end = pos.end;

      if (end - begin === 0) {
        begin = k !== 46
        ? this.seekPrev(begin) : (end = this.seekNext(begin - 1));

        end = k === 46
        ? this.seekNext(end) : end;
      }

      this.clearBuffer(begin, end);
      this.shiftL(begin, end - 1);
      this.updateModel(e);

      e.preventDefault();
    } else if (k === 13) { // enter
      this.onInputBlur(e);
      this.updateModel(e);
    } else if (k === 27) { // escape
      this.el.value = this.focusText;
      this.caret(0, this.checkVal());
      this.updateModel(e);
      e.preventDefault();
    }
  }

  /**
   * @public
   * @param: {e<KeyboardEvent>}
   * @return: void
   * @description: an event handler that get called on
   * keypress event.
   */
  public onKeyPress(e: KeyboardEvent): void {
    // do not proceed if the input field is ready only.
    if (this.readonly) { return; }

    let k = e.which || e.keyCode,
      pos = this.caret(), p, c, next, completed;

    // ignore if the current key is a alt, ctrl or meta key
    if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {
      return;
    } else if (k && k !== 13) {
      if (pos.end - pos.begin !== 0) {
        this.clearBuffer(pos.begin, pos.end);
        this.shiftL(pos.begin, pos.end - 1);
      }

      p = this.seekNext(pos.begin - 1);
      if (p < this.len) {
        c = String.fromCharCode(k);
        if (this.tests[p].test(c)) {
          this.shiftR(p);

          this.buffer[p] = c;
          this.writeBuffer();
          next = this.seekNext(p);

          if (/android/i.test(this.domHandler.getUserAgent())) {
            // path for CSP Violation on FireFox OS 1.1
            const proxy = () => { this.caret(next); };
            setTimeout(proxy, 0);

          } else {
            this.caret(next);
          }
          if (pos.begin <= this.lastRequiredNonMaskPos) {
            completed = this.isCompleted();
          }
        }
      }
      e.preventDefault();
    }
    this.updateInputState(e, completed);
  }

  /**
   * @public
   * @param: {e<Event>}
   * @param: {completed<boolean>}
   * @return: void
   * @description: a helper function that gets called by the keypress
   * event handler.
   */
  public updateInputState(e: Event, isCompleted: boolean): void {
    this.updateModel(e);
    this.updateFilledState();

    // let others listen to complete event based on the completed flag
    if (isCompleted) {
      this.onComplete.emit();
    }
  }

  /**
   * @public
   * @param: {e<Event | ClipboardEvent>}
   * @return: void
   * @description: an input handler
   */
  public clearBuffer(start, end): void {
    let i;
    for (i = start; i < end && i < this.len; i++) {
      if (this.tests[i]) {
        this.buffer[i] = this.getPlaceholder(i);
      }
    }
  }

  /**
   * @public
   * @return: void
   * @description: method that sets the input value.
   */
  public writeBuffer(): void {
    this.el.value = this.buffer.join('');
  }

  /**
   * @public
   * @param: {allow<boolean>}
   * @return: void
   * @description: a helper function that overwrites the buffer
   * & updates the input value.
   */
  public checkVal(allow?: boolean): any {
    // try to place characters where they belong
    const lastMatch = -1;

    // re-write the buffers
    const idx: number = this.updateBuffer(lastMatch);

    // perform buffer actions based on allow value
    this.performBufferOperations(lastMatch, allow);
    return (this.partialPosition ? idx : this.firstNonMaskPos);
  }

  /**
   * @public
   * @param: {lastMatch<number>}
   * @param: {allow<boolean>}
   * @return: void
   * @description: a helper function function that peforms buffer actions
   */
  public performBufferOperations(
    lastMatch: number, allow?: boolean): void {
    if (allow) {
      this.writeBuffer();
    } else if (lastMatch + 1 < this.partialPosition) {
      if (this.autoClear || this.buffer.join('') === this.defaultBuffer) {
        // invalid value. Remove it and replace it with the
        // mask, which is the default behavior.
        if (this.el.value) {
          this.el.value = '';
        }
        this.clearBuffer(0, this.len);
      } else {
        // invalid value, but we opt to show the value to the
        // user and allow them to correct their mistake.
        this.writeBuffer();
      }
    } else {
      this.writeBuffer();
      this.el.value = this.el.value.substring(0, lastMatch + 1);
    }
  }

  /**
   * @public
   * @param: {lastMatch<number>}
   * @param: {idx<number>}
   * @return: number
   * @description: a helper function function overwrites the buffers list
   */
  public updateBuffer(lastMatch: number): number {
    let test = this.el.value, c, pos, idx;

    for (idx = 0, pos = 0; idx < this.len; idx++) {

      // update the buffer, if the tests array has a valid value at
      // the current index
      if (this.tests[idx]) {
        this.buffer[idx] = this.getPlaceholder(idx);

        while (pos++ < test.length) {
          c = test.charAt(pos - 1);
          if (this.tests[idx].test(c)) {
            this.buffer[idx] = c;
            lastMatch = idx;
            break;
          }
        }

        if (pos > test.length) {
          this.clearBuffer(idx + 1, this.len);
          break;
        }
      } else {
        if (this.buffer[idx] === test.charAt(pos)) {
          pos++;
        }
        if (idx < this.partialPosition) {
          lastMatch = idx;
        }
      }
    }
    return idx;
  }

  /**
   * @public
   * @param: {e<Event | ClipboardEvent>}
   * @return: void
   * @description: an event handler that gets called on
   * input focus event.
   */
  public onInputFocus(event): void {
    // do not proceed if the input field is read only
    if (this.readonly) { return; }

    // if the input field isn't read only, set the focus
    this.focus = true;

    // clear the timeouts if there are any
    clearTimeout(this.caretTimeoutId);

    const pos: number = this.checkVal();

    // set up the focus text
    this.focusText = this.el.value;

    // write buffer after the timeout
    this.caretTimeoutId = this.setCaretTimeout(pos);

    // let others listen to on focus event
    this.onFocus.emit(event);
  }

  /**
   * @public
   * @param: {pos<number>}
   * @return: timer
   * @description: a helper function that writes the
   * buffer after trigger a timeout.
   */
  public setCaretTimeout(pos: number): any {
    const len: number = this.mask.replace('?', '').length;

    return setTimeout(() => {
      // do not proceed if the current element is inactive
      if (this.el !== document.activeElement) { return; }

      this.writeBuffer();
      (pos == len) ? this.caret(0, pos) : this.caret(pos);
    }, 10);
  }

  /**
   * @public
   * @param: {e<Event>}
   * @return: void
   * @description: an event handler that gets called
   * on the input event.
   */
  public onInput(e: Event): void {
    // let other listents to input event
    this.enter.emit(e);

    // if the current browser is an android chrome
    // handle is separately
    if (this.isAndroidChrome) {
      this.handleAndroidInput(e);
    } else {
      this.handleInputChange(e);
    }
  }


  /**
   * @public
   * @param: {e<Event | ClipboardEvent>}
   * @return: void
   * @description: an event handler that gets called on
   * input & paste event.
   */
  public handleInputChange(e: Event | ClipboardEvent): void {
    // do not proceed if the input field is read only
    if (this.readonly) { return; }

    setTimeout(() => {
      this.caret(this.checkVal(true));
      this.updateModel(e);

      // trigger complete event if the masking is completed
      if (this.isCompleted()) {
        this.onComplete.emit();
      }
    }, 0);
  }

  /**
   * @public
   * @return: unmasked value
   * @description: method that gives back the unmasked value
   */
  public getUnmaskedValue(): any {
    const unmaskedBuffer = [];

    for (let i = 0; i < this.buffer.length; i++) {
      const c = this.buffer[i];
      if (this.tests[i] && c != this.getPlaceholder(i)) {
        unmaskedBuffer.push(c);
      }
    }
    return unmaskedBuffer.join('');
  }

  /**
   * @public
   * @param: {e<any>}
   * @return: void
   * @description: helper function that updates the model value
   */
  public updateModel(e: any): void {
    this.onModelChange(this.unmask
      ? this.getUnmaskedValue()
      : e.target.value
    );
  }

  /**
   * @public
   * @return: void
   * @description: helper function that updates the filled state
   */
  public updateFilledState(): void {
    this.filled = this.el && this.el.value != '';
  }
}

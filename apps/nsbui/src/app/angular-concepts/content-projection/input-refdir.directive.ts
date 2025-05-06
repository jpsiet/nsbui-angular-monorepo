import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[InputRefdir]',
})
export class InputRefdirDirective {
  focus = false;
  constructor() {}
  @HostListener('focus')
  onFocus() {
    this.focus = true;
  }
  @HostListener('blur')
  onBlur() {
    this.focus = false;
  }
}

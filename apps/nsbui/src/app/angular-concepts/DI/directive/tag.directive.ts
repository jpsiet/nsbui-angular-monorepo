import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { GallaryServiceService } from '../view-provider/gallary-service.service';

@Directive({
  selector: '[first]',
})
export class TagDirective {
  constructor() {}

  @Input() first = '';
  // @HostBinding() innerText ='Hi I am from directive';

  @HostBinding() get innerText() {
    let value = this.first || 'Hi I am Default directive';
    return value;
  }

  @HostListener('click')
  onClick() {
    console.log(this.innerText);
  }
}

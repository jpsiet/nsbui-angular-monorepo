import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { GallaryServiceService } from '../view-provider/gallary-service.service';

@Directive({
  selector: '[online]',
})
export class OnLineDirective {
  constructor(private gallaryServiceService: GallaryServiceService) {}

  @HostBinding('disabled') get disabled() {
    return this.gallaryServiceService.onLine;
  }

  @HostBinding('class.offline') get offline() {
    return !this.gallaryServiceService.onLine;
  }

  @HostBinding('class.online') get online() {
    return this.gallaryServiceService.onLine;
  }

}

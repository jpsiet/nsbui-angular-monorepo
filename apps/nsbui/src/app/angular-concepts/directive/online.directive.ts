import { Directive, HostBinding } from '@angular/core';
import { OnlineService } from './online.service';

@Directive({
  selector: '[online]'
})
export class OnlineDirective {

  @HostBinding('disabled') get disabled(){
    return this.onlineService.online;
  }

  @HostBinding('class.offline') get offline(){
    return this.disabled
  }
  @HostBinding('class.online') get online(){
    return !this.disabled
  }

  constructor(private onlineService:OnlineService) { }

}

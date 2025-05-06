import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { TrackService } from './track.service';

@Directive({
  selector: '[track]'
})
export class TrackDirective {

  @Input()
  track!: string;
  @HostBinding() get innerText(){
    return this.track
  }

  @HostListener('click') onClick(){
    this.trackingService.log(this.track);
  }

  constructor( private trackingService:TrackService) { }

}

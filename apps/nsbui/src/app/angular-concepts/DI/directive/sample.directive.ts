import { Directive, ElementRef, Host } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';


@Directive({
  selector: '[appSample]',
  providers:[]
})
export class SampleDirective {

  constructor(private service:UserServiceService,private el:ElementRef) {
    this.el.nativeElement.style.color="red";
     this.service.sayHello(" Hi from sample Directvie");
  }

}

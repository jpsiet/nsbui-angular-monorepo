import { Directive, Host } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';


@Directive({
  selector: '[appSampleModified]'
})
export class SampleModifiedDirective {

  constructor(private service:UserServiceService) {
    this.service.sayHello(" Hi from sample modified  Directvie");
  }

}

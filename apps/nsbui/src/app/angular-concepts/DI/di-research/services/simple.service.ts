import { Inject, Injectable } from "@angular/core";
import { of } from "rxjs";
import { SimpleBaseService } from "./simple.base.service";

@Injectable({
  providedIn: 'root'
})
export class SimpleService {


  constructor(@Inject(SimpleBaseService) private simpleBaseService: SimpleBaseService
  ) { }


  hi() {
    console.log("Hi From Simple  new Logic Service");
    console.log(this.simpleBaseService.hi());
  }

  hello(){
    return of('DI research works !')
  }
}

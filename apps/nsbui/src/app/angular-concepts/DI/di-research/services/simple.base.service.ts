import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SimpleBaseService {
  constructor(){
  }

  getValue(){
     return 'real value';
  }

 hi(){
   console.log("Hi From Simple Base Service");
 }

 Hello(){
  return  of("Hello DI!!")
 }
}

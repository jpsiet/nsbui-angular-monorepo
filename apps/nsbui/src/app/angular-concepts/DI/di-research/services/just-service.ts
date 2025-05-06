
import { Inject, Injectable, InjectionToken, Injector, Optional } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
export interface IntervalConfig {
  interval: number;
}

export interface JustConfig {
  creator: string;
}
// just create token and let providers provide the token
export const JUSTCONFIGT = new InjectionToken<JustConfig>('justconfig');

// provided in root so all where same
export const INTERVAL = new InjectionToken<IntervalConfig>('interval', {
  providedIn: 'root',
  factory: () => ({
    interval: 5000,
  }),
});



@Injectable({
  providedIn: 'root',
  })
export class JustServiceService {
  constructor(@Inject(INTERVAL) private interval:number = 1000,
  @Inject(JUSTCONFIGT) private creator:string = "creator"){
  }


 hi(from:string){
   console.log("Hi" + from, this.interval);
   console.log("creator ", this.creator);
 }
 getData():Observable<string>{
  return of('Hello').pipe(delay(500));
 }
}

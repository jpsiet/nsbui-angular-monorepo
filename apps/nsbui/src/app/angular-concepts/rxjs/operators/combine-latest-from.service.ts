import { Injectable } from '@angular/core';
import {
  asapScheduler,
  asyncScheduler,
  combineLatest,
  concat,
  forkJoin,
  fromEvent,
  interval,
  merge,
  of,
  partition,
  race,
  timer,
  zip,
} from 'rxjs';
import {
  concatAll,
  delay,
  exhaust,
  map,
  mergeAll,
  observeOn,
  switchAll,
  switchMap,
  take,
  withLatestFrom,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

//A scheduler controls when a subscription starts and when notifications are delivered.
// It consists of three components.
//A Scheduler lets you define in what execution context will an Observable deliver
// notifications to its Observer.
export class CombineLatestFromService {
  constructor() {}

  test() {
    
    // const clicks = interval(5000);
    // const timer = interval(1000);
    // const result = clicks.pipe(withLatestFrom(timer));
    // result.subscribe((x) => console.log("from Latest" + x));
  }
}

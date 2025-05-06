import { Injectable } from '@angular/core';
import {
  asapScheduler,
  asyncScheduler,
  combineLatest,
  concat,
  forkJoin,
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
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

//A scheduler controls when a subscription starts and when notifications are delivered.
// It consists of three components.
//A Scheduler lets you define in what execution context will an Observable deliver
// notifications to its Observer.
export class SchdulerObservable {
  constructor() {}

  problemSchdule() {
    console.log('console.log');

    setTimeout(() => {
      console.log('set time out'), 0;
    });
    Promise.resolve('Promise resoved').then(console.log);
    of('stream value').subscribe((value) => {
      console.log(value);
    });
    requestAnimationFrame(() => {
      console.log('animation call back');
    });
    // same as above
    // of('stream value').subscribe(console.log);
  }
  // now observable will be micro task  like promise
  runSyncAsSyncMicroSchdule() {
    of('stream value').pipe(observeOn(asapScheduler)).subscribe(console.log);
    Promise.resolve('Promise resoved').then(console.log);
    requestAnimationFrame(() => {
      console.log('animation call back');
    });
    setTimeout(() => {
      console.log('set time out'), 0;
    });
    console.log('console.log');
  }

  // now obseravble it will be equivalent  set time out,order will decide for execution context
  runSyncAsSyncMacroSchdule() {
    requestAnimationFrame(() => {
      console.log('animation call back');
    });

    setTimeout(() => {
      console.log('set time out'), 0;
    });
    of('stream value').pipe(observeOn(asyncScheduler)).subscribe(console.log);
    Promise.resolve('Promise resoved').then(console.log);
  }

  // now obseravble it will be equivalent  set time out,order will decide for execution context
  delaySchuldeSchdule() {
    of('stream value').pipe(delay(1, asyncScheduler)).subscribe(console.log);
    setTimeout(() => {
      console.log('set time out'), 0;
    });
    Promise.resolve('Promise resoved').then(console.log);
    requestAnimationFrame(() => {
      console.log('animation call back');
    });
  }
}

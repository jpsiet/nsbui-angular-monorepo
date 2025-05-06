import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { concatAll, exhaust, map, mergeAll, switchAll, switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

//HighOrderObservable
export class JoinOperatorObservable {
  constructor() {}
  //Observables most commonly emit ordinary values like strings and numbers,
  //but surprisingly often, it is necessary to handle Observables of Observables,
  //so-called higher-order Observables. For example, imagine you had an Observable emitting
  //strings that were the URLs of files you wanted to see. The code might look like this:

  //operator subscribes to each "inner" Observable that comes out of the "outer" Observable,
// and copies all the emitted values until that Observable completes, and goes on to the next one.
// All of the values are in that way concatenated
  getConcatAllOperator() {
    const obs1 = interval(1000).pipe(take(2));
    const obs2 = interval(600).pipe(take(4));
    const higherOrder = obs1.pipe(
      map((ev) =>  { console.log( "first Obser" + ev); return obs2 }),
      concatAll()
    );
    //const firstOrder = higherOrder.pipe());
    higherOrder.subscribe((x) => console.log(x));
  }
  //subscribes to each inner Observable as it arrives, then emits each value as it arrives
  getMergeAllOperator() {
    const obs1 = interval(1000).pipe(take(2));
    const obs2 = interval(600).pipe(take(4));
    const higherOrder = obs1.pipe(
      map((ev) =>  { console.log( "first Obser" + ev); return obs2 }),
      mergeAll()
    );
    //const firstOrder = higherOrder.pipe());
    higherOrder.subscribe((x) => console.log(x));
  }
 //  subscribes to the first inner Observable when it arrives,
 // and emits each value as it arrives, but when the next inner Observable arrives,
 // unsubscribes to the previous one, and subscribes to the new one.
  getSwitchAllOperator() {
    const obs1 = interval(1000).pipe(take(2));
    const obs2 = interval(600).pipe(take(4));
    // const higherOrder = obs1.pipe(
    //   map((ev) =>  { console.log( "first Obser" + ev); return obs2 }),
    //   switchAll()
    // );
    const higherOrder = obs1.pipe(
      switchMap((ev) =>  { console.log( "first Obser" + ev); return obs2 }),

    );

    higherOrder.subscribe((x) => console.log(x));
  }


  getExhaustAllOperator() {
    const obs1 = interval(1000).pipe(take(2));
    const obs2 = interval(600).pipe(take(4));
    const higherOrder = obs1.pipe(
      map((ev) =>  { console.log( "first Obser" + ev); return obs2 }),
      exhaust()
    );
    //const firstOrder = higherOrder.pipe());
    higherOrder.subscribe((x) => console.log(x));
  }
}

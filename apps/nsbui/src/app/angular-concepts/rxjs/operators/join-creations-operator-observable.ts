import { Injectable } from '@angular/core';
import {
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
  exhaust,
  map,
  mergeAll,
  switchAll,
  switchMap,
  take,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

//HighOrderObservable
export class JoinCreationOperatorObservable {
  constructor() {}

  // All of the values are in that way concatenated
  //Creates an output Observable which concurrently emits all values from every
  // given input Observable. Observable<R>: an Observable that emits items that are the
  //result of every input Observable.
  //Flattens multiple Observables together by blending their values into one Observable.
  // concat measn order always important first finish first then go to second
  getConcatOperator() {
    const obs1 = interval(1000).pipe(take(2));
    const obs2 = interval(600).pipe(take(4));
    const higherOrder = concat(obs1, obs2).subscribe((x) => console.log(x));
  }

  // let all go
  getMergeOperator() {
    const obs1 = interval(1000).pipe(take(2));
    const obs2 = interval(600).pipe(take(4));
    const higherOrder = merge(obs1, obs2).subscribe((x) => console.log(x));
  }

  // get last one, combine all the output
  getForkOperator() {
    const obs1 = interval(1000).pipe(take(2));
    const obs2 = interval(600).pipe(take(4));
    forkJoin([obs1, obs2]).subscribe((values) => {
      console.log(...values);
    });
  }

  // get all input .. into array format
  getZipOperator() {
    const obs1 = interval(1000).pipe(take(2));
    const obs2 = interval(600).pipe(take(4));
    zip(obs1, obs2).subscribe((values) => {
      console.log(...values);
    });
  }

  // Subscribes to the observable that was the first to start emitting
  getRaceOperator() {
    const obs1 = interval(100).pipe(take(2));
    const obs2 = interval(600).pipe(take(4));
    race(obs1, obs2).subscribe((value) => {
      console.log(value);
    });
  }

  //first behaves like filter and the second behaves like filter with the predicate
  // negated.
  getpartitionOperator() {
    const observableValues = of(1, 2, 3, 4, 5, 6);
    const [evens$, odds$] = partition(
      observableValues,
      (value, index) => value % 2 === 0
    );

    odds$.subscribe((x) => console.log('odds', x));
    evens$.subscribe((x) => console.log('evens', x));
  }

  // Whenever any input Observable emits a value, it computes a formula using the
  // latest values from all the inputs, then emits the output of that formula.
  getcombineLatestOperator() {
    const firstTimer = timer(0, 1000).pipe(take(4));
    const secondTimer = timer(500, 1000).pipe(take(6));
     // combineLatest([firstTimer, secondTimer]).subscribe((value) =>
    //   console.log(value)
    // );

    const weight = of(70, 72, 76, 79, 75);
    const height = of(1.76, 1.77, 1.78);
    combineLatest([weight,height]).subscribe((value) =>
      console.log(value)
    );
  }
}

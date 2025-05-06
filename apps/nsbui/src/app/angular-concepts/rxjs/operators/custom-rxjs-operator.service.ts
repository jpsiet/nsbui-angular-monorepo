import { ComponentFactoryResolver, Injectable } from '@angular/core';
import {
  combineLatest,
  concat,
  forkJoin,
  interval,
  merge,
  Observable,
  of,
  timer,
  zip,
} from 'rxjs';
import {
  buffer,
  bufferCount,
  bufferTime,
  first,
  last,
  map,
  scan,
  skip,
  startWith,
  switchMap,
  take,
  takeLast,
  withLatestFrom,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomRxjsOperatorService {
  constructor() {}

  createMulitPlyOperator(source?: Observable<any>, multiplyBy?: number) {
    return new Observable((subscriber) => {
      source?.subscribe(
        (data) => {
          if (multiplyBy) {
            subscriber.next(data * multiplyBy);
          } else {
            subscriber.next(data);
          }
        },
        (error) => {
          subscriber.error(error);
        },
        () => {
          subscriber.complete();
        }
      );
    });
  }

  // Little Research Over take Operator  it take number to will emit that times data
  takeOperator() {
    const source = interval(3000);
    // these are begining of observable logic
    const takeFive = source.pipe(take(5));
    const takeFirst = source.pipe(first()); // source.pipe( take(1))  ;
    const skipFive = source.pipe(skip(5)); // will skip first 5

    // Let's go to from  end of observable
    // takeLast  observable to should obe completed stage other wise this will not work
    //  it will emit  values once observable complted ( will wait to complete observable)
    // in sync way  just to make these are last 2 values
    const takeLastTwo = source.pipe(take(3), takeLast(2)); // will trigger once all 5 complete
    //const takeLastOne = source.pipe(take(3), last());
    takeLastTwo.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log('Error' + error);
      },
      () => {
        console.log('completed take Operator');
      }
    );
  }

  //ConcatOperator it's good when you have finite observables but it works with infinite  too
  // it worked in sequence manner means once complete then other will start ..
  ConcatOperator() {
    const source = interval(1000);
    // these are begining of observable logic
    const takeFive = source.pipe(take(5));
    const appendMore = of(5, 6, 7, 8, 9);
    const prepend = of('a');
    const asSuffix = concat(takeFive, appendMore);
    const prefix = concat(prepend, takeFive); // prepend and then take all 5 or infinite
    const prefixStr = takeFive.pipe(startWith('a')); // same thing as above , you can achieve

    prefix.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log('Error' + error);
      },
      () => {
        console.log('concat take Operator');
      }
    );
  }

  // merge ( Like OR value will stream either any one of the observable)
  //work in parralel instead of sequence like concat
  mergeOperator() {
    const first$ = interval(300).pipe(
      take(10),
      map((val) => 'first =>' + val)
    );
    const second$ = interval(500).pipe(
      take(3),
      map((val) => 'second =>' + val)
    );
    merge(first$, second$).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log('Error' + error);
      },
      () => {
        console.log('complete Observable');
      }
    );
  }

  // combineLatest ( Like AND value will stream from both of the observable )
  // When any observable emits a value, emit the last emitted value from each untill all complete
  //combineLatest will not emit an initial value until each observable emits at least one value
  //Lastly, if you are working with observables that only emit one value,
  //or you only require the last value of each before completion, forkJoin is
  // likely a better option.
  combinelatestOperator() {
    console.log(' combine Latest Observable');
    // timerOne emits first value at 1s, then once every 4sconst
    const timerOne$ = timer(1000, 1000).pipe(take(1));
    // timerTwo emits first value at 2s, then once every 4sconst
    const timerTwo$ = timer(4000, 1000).pipe(take(25));
    const timerThree$ = timer(8000, 4000).pipe(take(3));
    combineLatest([timerOne$, timerTwo$, timerThree$]).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log('Error' + error);
      },
      () => {
        console.log(' Combine complete Observable');
      }
    );
  }
  // Latest value from quicker second source, if source complete then it will not emit
  // value like combineLatest ( if any one emitting then will emit)
  // it works only with 2 observable
  withLatestOperator() {
    // timerOne emits first value at 1s, then once every 4sconst
    const timerOne$ = timer(1000, 6000).pipe(take(4));
    // timerTwo emits first value at 2s, then once every 4sconst
    const timerTwo$ = timer(8000, 6000).pipe(take(10));
    timerOne$.pipe(withLatestFrom(timerTwo$)).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log('Error' + error);
      },
      () => {
        console.log('withLatest  Observable completed');
      }
    );
  }

  //zip comine corresponding value ( nth from first to nth from second not like combineLatest 1 to nth)
  // and will stop if any one stop
  zipOperator() {
    console.log('zip ====');
    // timerOne emits first value at 1s, then once every 4sconst
    const timerOne$ = timer(1000, 1000).pipe(take(5));
   //  0, 1 ,2, 3 , 4
   //   -  -  - 0 ,1
    // timerTwo emits first value at 2s, then once every 4sconst
    const timerTwo$ = timer(4000, 1000).pipe(take(2));

    // it will  produce [0,0] and [1,1] correspoding 0th and first value from each
   zip(timerOne$, timerTwo$).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log('Error' + error);
      },
      () => {
        console.log('zip Observable completed');
      }
    );
  }
  // if you want every thing concurrent use MergeMap
  // if you want to cancel previus one then use swtich map
  // if you nothing conucurrent and cancel then use concat map
  // concatMap is just like mergeMap with 1 count

  //When all observables complete, emit the last emitted value from each.
  //  If an inner observable does not complete forkJoin will never emit a value!
  // Like Promise.all.
  forkJoinOperator() {
    console.log('forJoin  ====');
    // timerOne emits first value at 1s, then once every 4sconst
    const timerOne$ = timer(1000, 1000).pipe(take(5));
    // timerTwo emits first value at 2s, then once every 4sconst
    const timerTwo$ = timer(4000, 1000).pipe(take(2));

    // it will  produce [4,1]
    forkJoin({ timerOne$, timerTwo$ }).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log('Error' + error);
      },
      () => {
        console.log('forkJoin  Observable completed');
      }
    );
  }

  // it combine value from one observable
  scanOperator() {
    console.log('scan  ====');
    const timerOne$ = timer(1000, 1000).pipe(take(5));
    const startsWith = 10;
    timerOne$
      .pipe(scan((acc: number, value: number) => acc + value, startsWith))
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log('Error' + error);
        },
        () => {
          console.log('scan  Observable completed');
        }
      );
  }

  // it grouped values based on the criteria
  bufferOperator() {
    console.log('buffer  ====');
    // timerOne emits first value at 1s, then once every 4sconst
    const timerOne$ = timer(1000, 1000).pipe(take(5));
    const bufferClosedWhen$ = interval(1000).pipe(take(1));
    // it will grpuped at 2 -2 values and then emit and in last it will single values if last one
    const buffercount$ = timerOne$.pipe(bufferCount(2));
    const bufferTime$ = timerOne$.pipe(bufferTime(1900));
    const buffer$ = timerOne$.pipe(buffer(bufferClosedWhen$));
    buffer$.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log('Error' + error);
      },
      () => {
        console.log('buffer  Observable completed');
      }
    );
  }
}

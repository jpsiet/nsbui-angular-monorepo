import { Injectable } from '@angular/core';
import {
  empty,
  EMPTY,
  EmptyError,
  interval,
  NEVER,
  Observable,
  of,
} from 'rxjs';
import {
  catchError,
  debounce,
  debounceTime,
  delay,
  delayWhen,
  distinct,
  distinctUntilChanged,
  map,
  retry,
  retryWhen,
  take,
  throttleTime,
} from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class RxjxDelayOperatorService {
  constructor() {}

  normalDataObs = interval(1000).pipe(take(10));

  // delay operator will start delay for 2000 ms and then will start emit data flow
  delayOperator() {
    return this.normalDataObs.pipe(delay(1000));
  }
  // delayWhen will take input observable and return out put observable based on value
  // you can customize value based on  each value
  delayWhenOperator() {
    return this.normalDataObs.pipe(delayWhen((x) => interval(500 * x)));
  }
  // will keep 2s silence then will after source observable and then it will emit..if in between any other came
  // then it will start silence time again for 2s.. so if emission time of source is less than
  // silence time then  it willemit only last value  is less
  // debounce is same delaywhen you can customize delay time

  debounceTimeOperator() {
    return this.normalDataObs.pipe(debounceTime(2000));
  }

  // throttle and deboune behave  differnece throttle will emit first and then wait,  throttle is
  // filter operator or called limit operator  ( you can schdule that  data should be emitted every 5s)
  throttleTimeOperator() {
    //  0,1,2,3,4,5,6,7,8,9
    // output 0,3,6,9
    return this.normalDataObs.pipe(throttleTime(2000));
  }

  // will not emit duplicate item.. and by default case sensitive
  distinctTimeOperator() {
    // const  obs$ = of(1,2,3,4,5,1,1,4,8);
    //const  obs$ = of( { age: 4, name: 'Foo'},{ age: 7, name: 'Bar'},{ age: 5, name: 'Foo'});
    // return obs$.pipe(distinct((p: Person) => p.name));

    const obs$ = of('a', 'b', 'c', 'A');
    // you can specify case in sensitive senstivie logic
    return obs$.pipe(distinct((x: string) => x.toLowerCase()));
    //  you can also pass flusher observable which will determine when to clear the registry
    // of existing sotred item
  }

  // will not emit duplicate item.. just by comparing the previus item not whole back one
  distinctUntillChangeOperator() {
    //const  obs$ = of(1,2,3,4,5,1,1,4,8);
    // const  obs$ = of( { age: 4, name: 'Foo'},{ age: 7, name: 'Bar'},{ age: 5, name: 'Foo'});
    // obs$.pipe(distinct((p: Person) => p.name));

    const obs$ = of('a', 'b', 'c', 'A', 'a');
    // you can specify case senstivie logic
    //return obs$.pipe(distinctUntilChanged());

    return obs$.pipe(
      distinctUntilChanged(
        (x, y) => x.toLocaleLowerCase() === y.toLocaleLowerCase()
      )
    );
  }

  errorhandleingOpertor() {
    // we can use empty observable to handle error it will complete the stream
    // or we can use never it will be neevr end kind of ... means nothing after that
    const foo$ = interval(500).pipe(
      take(3),
      map(() => Math.random())
    );
    const bar$ = foo$.pipe(
      map((data) => {
        if (data > 0.5) return data;
        else {
          throw new Error(' number is low please try again');
        }
      })
    );
    // it will through normal error
    //return bar;
    // now we can handle error by sending empty, EMPTY it will end the observable
    // NEVER will not send complete signal but it's end the observable

    //return bar$.pipe(catchError((e,outputobs) => EMPTY))

    // or we can customize the error
    //return bar$.pipe(catchError((e,outputobs) => of("error happend let's find solution")))

    // now we can restart whole process again , kind of retry
    //return bar$.pipe(catchError((e,outputobs) => outputobs))

    //we can use retry to and also custmize the error msg if still coming
    //return bar$.pipe(retry(2),catchError((e,outputobs) => of("tried 2 times but are not working")));

    //we can use retry  after sepecfic timeto and also custmize the error msg if still coming
    // return bar$.pipe(retryWhen( (erros) => erros.pipe(delay(1000))),catchError((e,outputobs)
    //=> of("tried 2 times but are not working")));

    // we can repeat same set of data of by using repeat operator

    return bar$.pipe(
      retryWhen((erros) => erros.pipe(delay(5000))),
      catchError((e, outputobs) => of('tried 2 times but are not working'))
    );
  }
}

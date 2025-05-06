import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, interval, merge, of } from 'rxjs';
import {
  filter,
  map,
  mapTo,
  mergeAll,
  mergeMap,
  reduce,
  tap,
  scan,
  startWith,
  switchMap,
  switchMapTo,
  takeUntil,
  takeWhile,
  withLatestFrom,
  repeat,
} from 'rxjs/operators';
import { CustomRxjsOperatorService } from '../operators/custom-rxjs-operator.service';
import { RxjxDelayOperatorService } from '../operators/rxjx-delay-operator.service';
import { RxjxOperatorMapsOperatorService } from '../operators/rxjx-operator-maps-operator.service';


@Component({
  selector: 'app-rxjs-step-by-step',
  templateUrl: './rxjs-step-by-step.component.html',
  styleUrls: ['./rxjs-step-by-step.component.scss'],
})
export class RxjsStepByStepComponent implements OnInit, AfterViewInit {
  @ViewChild('stopButton', { static: true }) stopButton: any;
  @ViewChild('startButton', { static: true }) startButton: any;
  @ViewChild('resetButton', { static: true }) resetButton: any;
  @ViewChild('halfButton', { static: true }) halfButton: any;
  @ViewChild('quartorButton', { static: true }) quartorButton: any;
  @ViewChild('getDataBtn', { static: true }) getDataBtn: any;
  @ViewChild('input', { static: true }) input: any;

  constructor(private customOperator: CustomRxjsOperatorService,
    private mrgMapsOperator: RxjxOperatorMapsOperatorService,
    private dlyOperator: RxjxDelayOperatorService) { }

  ngOnInit(): void {
    // test very basic custom operator or observable

    //  const basicObserVable =  this.customOper.createMulitPlyOperator();
    //  const customObservable = this.customOper.createMulitPlyOperator(of("abc","Jitendra","A"));
    //  const customObservableMulti = this.customOper.createMulitPlyOperator(of(1,2,3),50);
    //  customObservableMulti.subscribe( (data)=> {
    //     console.log("data Custom Operator => " + data)
    //   })


    this.mrgMapsOperator.switchMapOperator().subscribe((data) => {
      console.log("data => " + JSON.stringify(data))
    }, (error) => {
      console.log(error)
    },
      () => {
        console.log(" == complete ===")
      });

   // this.dlyOperator.delayOperator();

  }

  ngAfterViewInit() {
    //  switch Map logic

    //  make a timer, which will  restart from the same time
    const start$ = fromEvent(this.startButton.nativeElement, 'click');
    const half$ = fromEvent(this.halfButton.nativeElement, 'click');
    const quartor$ = fromEvent(this.quartorButton.nativeElement, 'click');
    const interval$ = interval(1000);
    const stop$ = fromEvent(this.stopButton.nativeElement, 'click');
    const input$ = fromEvent(this.input.nativeElement, 'input');
    const getDataBtn$ = fromEvent(this.getDataBtn.nativeElement, 'click');
    const reset$ = fromEvent(this.resetButton.nativeElement, 'click');
    const arrayValue$ = of(10);
    // interval that stopwhen stop  observable comes
    const intervalThatStop$ = interval$.pipe(takeUntil(stop$));
    const startData = { count: 0 };
    const accFn = (acc: any) => {
      return { count: acc.count + 1 };
    };
    const reset = (acc: any) => startData;
    // TODO : once get time just try to get interval trigger as parameter too calcualte scan
    // const tempFn = (param:any) => accFn(param)
    const incorrest$ = merge(
      intervalThatStop$.pipe(mapTo(accFn)),
      reset$.pipe(mapTo(reset))
    );
    // First Merge All input
    const startStream$ = merge(
      start$.pipe(mapTo(1000)),
      quartor$.pipe(mapTo(500)),
      half$.pipe(mapTo(250))
    );

    const intervalActions = (time: number) =>
      merge(
        interval(time).pipe(takeUntil(stop$)).pipe(mapTo(accFn)),
        reset$.pipe(mapTo(reset))
      );

    const timer$ = startStream$.pipe(
      switchMap(intervalActions),
      startWith(startData),
      scan((acc: any, curr) => curr(acc))
    );

    const inputTimer$ = input$.pipe(map((x: any) => x?.target?.value));
    // we can remove map an put inside  combine latest operator it will recieve 2 aurgumnet
    // merge will trigger start value ( like startWith ) in starting not wait , but with combine latest
    // it will wait for all to complete

    // zip vs combine latest .. both give result after every source emit at least one value..
    // zip don't give latest like combine latest

    // FORK JOIN  This operator is best used when you have a group of observables and only care
    // about the final emitted value of each. One common use case for this is if you wish to issue
    // multiple requests on page load (or some other event) and only want to take action when a
    //response has been received for all
    // COMBINELATEST AND WITHSTARTROM BEHAVE SAME ONLY DIFFERENCE IS THAT COMBINE LATEST WILL NOT COMPLETE
    // UNTILL EVERY ONE EMIT VALUE VS  WITHSTARTROM IT CAN COMPLETE WITHOUT OTHERS OBSERVABLE COMPLETE

    // combineLatest([timer$, inputTimer$]). pipe(
    timer$
      .pipe(
        tap((data) => console.log(data)),
        takeWhile(({ count, text }) => {
          //  console.log("console.count" + count);
          return count < 5;
        }),

        withLatestFrom(inputTimer$),

        map((array: any) => {
          console.log('array' + JSON.stringify(array));
          return { count: array[0].count, text: array[1] };
        }),

        filter(({ count, text }) => {
          // console.log("console.filter" + count + text);
          return count === parseInt(text);
        }),
        reduce((accum, curr) => {
          return accum + 1;
        }, 0), // passing 0 as starting point as accumaltor .. reduce give once calclaute then give next
        // not  like scan every value keep emiting we can use do operator to track whats happening l
        // we can use repeat operator which will resubscirbe when you click again ony any
        // button like start, repeate don't allow to  complete
        repeat()
      )

      //merge(timer$, inputTimer$).
      // pipe(map((array: any) => ({ 'count': array[0].count, 'text': array[1] }))).

      .subscribe(
        (data) => {
          console.log(' you scroed Data' + JSON.stringify(data));
        },
        (err) => {
          console.log('error' + err);
        },
        () => {
          console.log(' complete');
        }
      );


    // getDataBtn$.subscribe(() => {
    //   console.log("Button Data Clicked");
    //    arrayValue$.subscribe( (data) => {
    //      console.log("data =>" + data);
    //    })

    // })

    getDataBtn$.pipe( map(data =>arrayValue$),mergeAll()).subscribe( (data)=>{
      console.log("data =>" + JSON.stringify(data));
    })

  }
}

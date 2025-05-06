import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, merge, Observable, Subject } from 'rxjs';
import { map, mapTo, mergeAll, scan, startWith, take } from 'rxjs/operators';

@Component({
  selector: 'app-angular-with-rxjs',
  templateUrl: './angular-with-rxjs.component.html',
  styleUrls: ['./angular-with-rxjs.component.scss'],
})
export class AngularWithRxjsComponent implements OnInit {
  constructor() {}
  clock$ = new Subject();

  time$!: Observable<any>;
  interval$!: Observable<any>;
  done$!: Observable<any>;

  ngOnInit(): void {
    this.interval$ = interval(5000);
    // this.time$ = mergeAll([this.clock$.pipe(mapTo(new Date())),this.interval$.pipe(mapTo(new Date()))]);
    const clicks = fromEvent(document, 'click');
    const final$ = merge(
      clicks.pipe(mapTo('first')),
      interval(1000).pipe(mapTo('second'))
    );
    this.done$ = final$.pipe(
      startWith(new Date()),
      scan((acc: any, curr) => {
        const date = new Date(acc.getTime());
        if (curr === 'first') {
          date.setHours(date.getHours() + 1);
        }
        if (curr === 'second') {
          date.setSeconds(date.getSeconds() + 1);
        }

        return date;
      })
    );
  }

  handleUpdate() {
    this.clock$.next(0);
  }
}

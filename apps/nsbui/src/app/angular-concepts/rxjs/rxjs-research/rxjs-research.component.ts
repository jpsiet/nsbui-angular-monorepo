import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, interval, of, Subscription } from 'rxjs';
import {
  debounceTime,
  map,
  mapTo,
  mergeMap,
  scan,
  share,
  shareReplay,
  startWith,
  switchMap,
  takeUntil,
} from 'rxjs/operators';


@Component({
  selector: 'app-rxjs-research',
  templateUrl: './rxjs-research.component.html',
  styleUrls: ['./rxjs-research.component.scss'],
})
export class RXJSResearchComponent implements OnInit, AfterViewInit {
  @ViewChild('emitButton', { static: true }) emitButton: any;
  @ViewChild('addsecondButton', { static: true }) addsecondButton: any;
  @ViewChild('teardowneverythingButton', { static: true })
  teardowneverythingButton: any;

  buttonSubscription: any;
  emmissions: any;
  source: any;

  subscriptionOne: any;
  subscriptionTwo: any;
  constructor(private elm: ElementRef) {}

  ngOnInit(): void {

    //  maps operator logic



  }

  ngAfterViewInit() {
    this.emmissions = fromEvent(this.emitButton.nativeElement, 'click').pipe(
      mapTo(1)
    );
    // what type of state scan opearator hold
    //transient  : means seprate for each subscribe
    // single source of truth ?  : single state for each susbscirbe
    // by default it maintain transient

    // we can use share operatore to make it single source of truth
    // shareReplay maintain last record ( based on buffer size) for each new subscriber, and immediately
    // by default shareReplay keeps source alive and keep count increase
    //does't matter subscriber unsubscribed
    this.source = this.emmissions.pipe(
      scan((total: number, current: number) => total + current),
      shareReplay({ bufferSize: 1, refCount: true })
    );

    this.subscriptionOne = this.source.subscribe((res: any) => {
      console.log('ONE  ==>  ' + res);
    });

    // this.subscriptionTwo = fromEvent(this.addsecondButton.nativeElement, 'click').pipe(switchMap(() => this.source))
    //   .subscribe((res: any) => {
    //     console.log('TWO ==>  ' + res);
    //   });

    fromEvent(this.addsecondButton.nativeElement, 'click').subscribe(() => {
      console.log('adding second subscriber');
      this.subscriptionTwo = this.source.subscribe((res: any) => {
        console.log('TWO ==>  ' + res);
      });
    });

    fromEvent(this.teardowneverythingButton.nativeElement, 'click').subscribe(
      (res: any) => {
        console.log('UnSubscribe from every thing');
        this.subscriptionOne.unsubscribe();
        this.subscriptionTwo.unsubscribe();
      }
    );
 }
}

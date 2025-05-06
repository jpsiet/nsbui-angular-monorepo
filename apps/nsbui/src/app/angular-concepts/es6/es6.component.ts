import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Es6ArrayService } from './services/es6-array.service';
import { Es6NewFeatureService } from './services/es6-new-feature.service';
import { ExecutionContext } from './services/execution-context.service';

@Component({
  selector: 'app-es6',
  templateUrl: './es6.component.html',
  styleUrls: ['./es6.component.scss'],
})
export class Es6Component implements OnInit, AfterViewInit {
  constructor(
    private es6featureService: Es6NewFeatureService,
    private es6ArrayService: Es6ArrayService,
    private executionContext: ExecutionContext
  ) { }
  @ViewChild('GrandDiv', { static: true }) GrandDiv: any;
  @ViewChild('parentDiv', { static: true }) parentDiv: any;
  @ViewChild('childDiv', { static: true }) childDiv: any;
  @ViewChild('link', { static: true }) link: any;
  @ViewChild('debounce', { static: true }) debounce: any;
  @ViewChild('throttle', { static: true }) throttle: any;

  // create observable

  ngOnInit(): void {
    // this.es6featureService.debounceFun(this.childDiv);
  }
  ngAfterViewInit() {

    // if  you want to go with observable flow
    //const childDiv$ = fromEvent(this.childDiv.nativeElement,'click');
    // event flow ,, first capturing then bubbling phase.. so based on below parameter
    //  capture.. console .log will be called
    // this.es6featureService.eventpropgation(
    //   this.childDiv,
    //   this.parentDiv,
    //   this.GrandDiv
    // );
    // this.es6featureService.eventDelegation(this.link)
    this.es6featureService.throttleFn(this.throttle);
   // this.es6featureService.debounceFun(this.debounce);
  }
}

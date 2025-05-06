import { Component, OnInit } from '@angular/core';
import { animationFrameScheduler, interval, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-progress-schduler',
  templateUrl: './progress-schduler.component.html',
  styleUrls: ['./progress-schduler.component.scss']
})
export class ProgressSchdulerComponent implements OnInit {

  constructor() { }
  progress$!: Observable<number>;
  progress2$!: Observable<number>;

  ngOnInit(): void {
    this.progress$ = interval(100).pipe(take(100));
    this.progress2$ = interval(100,animationFrameScheduler).pipe(take(100));
  }

}

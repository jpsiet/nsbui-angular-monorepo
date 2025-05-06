import { Component, OnInit } from '@angular/core';
import { CombineLatestFromService } from './operators/combine-latest-from.service';
import { SchdulerObservable } from './operators/schduler-observable';

@Component({
  selector: 'app-rxjs-cont',
  templateUrl: './rxjs-cont.component.html',
  styleUrls: ['./rxjs-cont.component.scss'],
})
export class RxjsContComponent implements OnInit {
  constructor(private observable: CombineLatestFromService) {}

  ngOnInit(): void {
    //this.observable.test();
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ngFWeightType } from './ngForChildTypes';

@Injectable({
  providedIn: 'root'
})
export class DataObservableService {

  constructor() { }

  private wightSubject = new Subject<ngFWeightType>();
  data$ = this.wightSubject.asObservable();
  sendWeightData(data: ngFWeightType) {
    console.log(" sending new weight data",data);
    this.wightSubject.next(data);
}
    // handleChangeConfigData() {
    //   const random = Math.ceil(Math.random() * 10);
    //   this.config.next({ id: random, name: 'config' + random });
    // }

    // handleMatchData() {
    //   const random = 5;
    //   this.config.next({ id: random, name: 'config' + random });
    //   this.weights.next({ id: random, name: 'weight' + random });
    // }

    // handleChangeWeightData() {
    //   const randomW = Math.ceil(Math.random() * 10);
    //   this.weights.next({ id: randomW, name: 'weight' + randomW });
    // }
}

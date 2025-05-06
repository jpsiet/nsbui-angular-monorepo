import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceInterface } from './service-interface';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService implements ServiceInterface {

   count = 0;
  prefix = 'User Base Service';
  constructor(http:HttpClient) { }

  sayHello(from: string) {
    this.count++;
    console.log(`${this.prefix} Base Service  ===> ${from} ==>  ${this.count} `);
  }

}

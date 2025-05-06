import { Inject, Injectable, Injector } from '@angular/core';
import { AppConfig, APP_CONFIG } from '../../angular-concepts/DI/config.token';
import { ServiceInterface } from './service-interface';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService implements ServiceInterface {
   count = 0;
  prefix = 'User Service';
  // Here we want to load config Object
  constructor(@Inject(APP_CONFIG) private config:AppConfig) {
    console.log(` user service ==> appconfig ${JSON.stringify(config)}`)
  }

  sayHello(from: string) {
    this.count++;
    console.log(`${this.prefix} User Service ===> ${from} ==>  ${this.count} `);
  }


}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { config, Observable, timer } from 'rxjs';

import { BaseServiceService } from 'src/app/nsb-public/services/base-service.service';
import { LegacyLogger } from 'src/app/nsb-public/services/Legacy-logger';

import { AppConfig, APP_CONFIG } from '../config.token';
import {
  INTERVAL,
  JUSTCONFIGT,
  JustServiceService,
} from './services/just-service';
import { SimpleBaseService } from './services/simple.base.service';
import { SimpleService } from './services/simple.service';
import { UserServiceService } from 'src/app/nsb-public/services/user-service.service';

@Component({
  selector: 'app-di-research',
  templateUrl: './di-research.component.html',
  styleUrls: ['./di-research.component.scss'],
  // UserServiceService already have root level provider that will shared
  // instance across all the application if you want seprate one create here
  // when  you use class , UserService will get instance of baseService from injector
  // use class always create seprate instance of baseService class not the generic one
  //providers:[{provide:UserServiceService,useClass:BaseServiceService}]
  // if you want the same global instance then useExisting instead of Use class
  //providers:[{provide:UserServiceService,useExisting:BaseServiceService}]
  // LegacyLogger is not class based so we can not use the Useclass or existing so we have to use
  // usevalue provider logic for static kind of logic
  // use factory where you want  your provider more dynamic
  // use value and  use facotry for non class like config..or some static object...
  providers: [
    {
      provide: UserServiceService,
      useFactory: (config: AppConfig, http: HttpClient) => {
        return config.logger ? LegacyLogger : new BaseServiceService(http);
      },
      deps: [APP_CONFIG, HttpClient],
    },
    JustServiceService,
    {
      provide: JUSTCONFIGT,
      useValue: { creator: 'research compoment' },
    },
  ],

  // provide is just a token name.. so you can any string.. if both string having saame name
  // then last one will be overide.. so angular comes with opaque token concept where you can token
  // name and it will create all the way new key ..with same string it will create different key
  // opaque token is depercitaed with inject token
})
export class DiResearchComponent implements OnInit {
  // optional modifier will not throw error if there is no UserService provider
  //  constructor( @Optional() private userService:UserServiceService) { }

  // Self modifier will  throw error if there is no UserService provider in this component it self
  // constructor( @Self() private userService:UserServiceService,) { }
  // it will skip the current provide and will take from next in hierarchy
  valueObs!: Observable<any>;
  valueObs1!: Observable<any>;
  content = 'DI research works !';
  hideContent = true;
  data = {
    name:'Jitendra'
  }

  constructor(
    private userService: UserServiceService,
    private simpleService: SimpleService,
    private justServiceService: JustServiceService,
    private simpleBaseService: SimpleBaseService
  ) {}

  ngOnInit(): void {
    // this.userService.sayHello('userService');
    // this.userService.sayHello('userService');
    // this.baseService.sayHello('Base Service');
    // this.baseService.sayHello('Base Service');
    this.justServiceService.hi('from research Just Now ===>');
    this.justServiceService.getData().subscribe((data) => {
      console.log('%cjust Service Data =>' + data, 'color:green');
    });

    this.valueObs = this.simpleService.hello();
    this.valueObs1 = this.simpleBaseService.Hello();
  }

  toggleContent() {
    this.hideContent = !this.hideContent;
  }

  togleContentAsync() {
    timer(500).subscribe(() => {
      this.toggleContent();
    });
  }
}

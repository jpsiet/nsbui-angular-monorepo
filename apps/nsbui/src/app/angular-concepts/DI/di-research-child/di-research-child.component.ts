import { Component, Host, OnInit, Self, SkipSelf } from '@angular/core';

import { INTERVAL, JUSTCONFIGT, JustServiceService } from '../di-research/services/just-service';
import { UserServiceService } from 'src/app/nsb-public/services/user-service.service';

@Component({
  selector: 'app-di-research-child',
  templateUrl: './di-research-child.component.html',
  styleUrls: ['./di-research-child.component.scss'],
  providers: [{ provide: UserServiceService, useClass: UserServiceService },
    JustServiceService,{
      provide:JUSTCONFIGT,useValue:{creator:"research Child compoment"},
    }
  ],
})
export class DiResearchChildComponent implements OnInit {
  // it will skip the current provide and will take from next in hierarchy, like in this case
  //it will  take the parent one di-research-parent one
  // constructor( @SkipSelf() private userService:UserServiceService) { }
  constructor(
    @Host() private userService: UserServiceService,
    private justServiceService: JustServiceService
  ) {}

  ngOnInit(): void {
    //  this.userService.prefix = "di-research.child-conponent";
    //   this.userService.sayHello("di -research-component-child");
    //   this.userService.sayHello("di -research-component-child");

    this.justServiceService.hi('from child === >');
  }
}

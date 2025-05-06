import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Observable, Subject } from "rxjs";

import { User } from "./user";
import { UserService } from "./user.service";

@Component({
  selector: 'newsletter',
  changeDetection:ChangeDetectionStrategy.OnPush,
  template: `
 <fieldset class="newsletter" *ngIf="userService.user$ | async as user else loading">

        <legend>Newsletter</legend>

        <h5>Hello {{user.firstName}},
            enter your email below to subscribe:</h5>

        <form>
            <input #email type="email" name="email" placeholder="Enter your Email" >
            <input  type="button" class="button button-primary" value="Subscribe"
                    (click)="subscribeToNewsletter(email.value)">
        </form>
    </fieldset>

    <ng-template #loading>
        <div>Loading ...</div>
    </ng-template>

`})
export class NewsletterComponent implements OnInit  {

  // @Input()
  // user$?: Observable<User>;
  firstName!: string;
  @Output()
  subscribe = new EventEmitter();

  constructor(public userService:UserService){

  }
  ngOnInit(): void {

  }

  subscribeToNewsletter(email:string) {
      this.subscribe.emit(email);
  }

}


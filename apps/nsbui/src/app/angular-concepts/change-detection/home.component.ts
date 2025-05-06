import { Component } from "@angular/core";
import { User } from "./user";
import { UserService } from "./user.service";

@Component({
  selector: 'home',
  template: `
  <newsletter (subscribe)="subscribe($event)"></newsletter>
  <button (click)="changeUserName()">Change User Name</button>
`})
export class HomeComponent {

  user: User = {
      firstName: 'Alice',
      lastName: 'Smith'
  };

  constructor(

    public userService: UserService ) {
}

  subscribe(email:string) {

  }

  changeUserName() {
    this.userService.loadUser({firstName: 'Bob', lastName: 'Smith' });
  }

}

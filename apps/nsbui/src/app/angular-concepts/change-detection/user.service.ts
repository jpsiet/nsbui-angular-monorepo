import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "./user";
import { HttpClient } from "@angular/common/http";

const ANONYMOUS_USER: User = {
  firstName: '',
  lastName: ''
};


@Injectable({
  providedIn: 'root'
})
export class UserService {

 private subject = new BehaviorSubject<User>(ANONYMOUS_USER);

 user$: Observable<User> = this.subject.asObservable();

 loadUser(user:User) {
     this.subject.next(user);
 }




}

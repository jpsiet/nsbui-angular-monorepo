import { Injectable } from '@angular/core';

export class Person {
  constructor() {
    this.sayName = this.sayName.bind(this);
  }
  name = 'Manu';
  sayName() {
    return this.name;
  }
}
@Injectable({
  providedIn: 'root',
})
export class ExecutionContext {
  person: Person = new Person();

  executionContext() {
    console.log(setTimeout(() => {
      this.person.sayName();
    }, 3000));
  }
}

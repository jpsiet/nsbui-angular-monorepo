import { Injectable } from '@angular/core';

// last in first out
class Stack<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  remove(): T | undefined {
    return this.data.pop();
  }
}

@Injectable({
  providedIn: 'root',
})
export class StackService {
  constructor() {}

  test() {
    let stack: Stack<number> = new Stack();
    stack.add(3);
    stack.add(5);
    console.log(stack);
    stack.remove();
    console.log(stack);
  }
}

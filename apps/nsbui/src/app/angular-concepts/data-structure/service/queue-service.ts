import { Injectable } from '@angular/core';
import { queue } from 'rxjs';

// queue means first in first out
class Queue<T> {
  public data: Map<number, T> = new Map();
  private enqueueIndex: number = 0;
  private dQueueIndex: number = 0;

  add(item: T) {
    this.data.set(this.enqueueIndex, item);
    this.enqueueIndex++;
  }
  remove(): T | undefined {
    if (this.enqueueIndex != this.dQueueIndex) {
      let item = this.data.get(this.dQueueIndex);
      this.data.delete(this.dQueueIndex);
      this.dQueueIndex++;
      return item;
    }
    return undefined;
  }

  size():number{
    return this.enqueueIndex-this.dQueueIndex;
  }
}

@Injectable({
  providedIn: 'root',
})
export class QueueService {
  constructor() {}

  getQueue<T>() {
    let queue: Queue<T> = new Queue();
    return queue;
  }

  test() {
    let stack: Queue<number> = new Queue();
    stack.add(3);
    stack.add(5);
    console.log(stack);
    stack.remove();
    console.log(stack);
  }
}

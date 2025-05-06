import { Injectable } from '@angular/core';
class DoubleLinkListNode<T> {
  value: T | null = null;
  next: DoubleLinkListNode<T> | null = null;
  prev: DoubleLinkListNode<T> | null = null;
}

class DoubleLinkList<T> {
  head: DoubleLinkListNode<T> | null = null;
  tail: DoubleLinkListNode<T> | null = null;
  add(value: T) {
    let node: DoubleLinkListNode<T> = {
      value,
      next: null,
      prev: null,
    };
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
  }
  //  FIFO
  deQueue(): T | null {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    } else {
      this.head.prev = null;
    }
    return value;
  }

  // LIFO
  pop(): T | null {
    if (!this.tail) return null;
    const value = this.tail.value;
    this.tail = this.tail.prev;
    if (!this.tail) {
      this.head = null;
    } else {
      this.tail.next = null;
    }
    return value;
  }

  *values() {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class DoubleLinkListService {
  constructor() {}

  test() {
    let list = new DoubleLinkList<number>();
    [1, 2, 3, 4].map((x) => list.add(x));
    console.log('removed ==> ' + list.deQueue());
    for (let item of list.values()) {
      console.log(item);
    }
  }

  // find sum of two link list   with sum number  repesent in reverse order
  //  5=>4>7 == 745 , 6 => 7 => 3 == 376 ... sum  1121 ===>  1=>2 ==>11
  sumOfTwoLinkList() {
    let list1 = new DoubleLinkList<number>();
    let list2 = new DoubleLinkList<number>();
    [5, 4, 7].map((item) => list1.add(item));
    [6, 7, 3].map((item) => list2.add(item));
  }
}

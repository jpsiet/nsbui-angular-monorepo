import { Injectable } from '@angular/core';
export interface LinkListNode<T> {
  value: T;
  next?: LinkListNode<T>;
}

export class LinkList<T> {
  public head?: LinkListNode<T> = undefined;
  public tail?: LinkListNode<T> = undefined;

  add(value: T) {
    let node = {
      value: value,
      next: undefined,
    };

    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }

    this.tail = node;
  }
  // first in first out
  remove(): T | undefined {
    let value = undefined;
    if (this.head) {
      value = this.head.value;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = undefined;
      }
    }
    return value;
  }

  *values<T>() {
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
export class LinkListService {
  constructor() {}

  test() {
    let list = new LinkList<number>();
    [1, 2, 3, 4].map((x) => list.add(x));
    console.log('removed ==> ' + list.remove());
    for (let item of list.values()) {
      console.log(item);
    }
  }

  // find sum of two link list   with sum number  repesent in reverse order
  //  5=>4>7 == 745 , 6 => 7 => 3 == 376 ... sum  1121 ===>  1=>2 ==>11

  sumOfTwoLinkList() {
    let list1 = new LinkList<number>();
    let list2 = new LinkList<number>();
    [5, 4, 7].map((item) => list1.add(item));
    [6, 7, 3].map((item) => list2.add(item));
  }
  private _sumOfTwoLinkList(
    list1: LinkList<number>[],
    list2: LinkList<number>[]
  ): LinkList<number>[] {
    let result: LinkList<number>[] = [];
    let node1 = list1;
    return result;
  }
}

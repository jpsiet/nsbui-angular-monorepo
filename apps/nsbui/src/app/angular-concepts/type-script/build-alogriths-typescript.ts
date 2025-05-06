import { Injectable } from '@angular/core';

// reference of this sample is https://egghead.io/courses/build-algorithms-using-typescript
@Injectable()
export class BuildAlogrithmsUsingTypeScript {
  linkListWithTypeScript() {
    interface LinkListnode<T> {
      value: T;
      next: LinkListnode<T> | undefined;
    }

    class LinkList<T> {
      head: LinkListnode<T> | undefined = undefined;
      tail: LinkListnode<T> | undefined = undefined;
      // add a item o(1)
      add(value: T) {
        const node = {
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
      //FIFO o(1);
      deque(): T | undefined {
        let value: T | undefined = undefined;
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

    const arrItem = [1, 2, 3, 4];
    const list = new LinkList<number>();
    arrItem.map((x) => list.add(x));
    console.log(list.values());

    for (const item of list.values()) {
      console.log(item);
    }
  }
  queueWithTypeScript() {
    // implement queue using type script
    // first in first out
    class Queue<T> {
      data: { [index: number]: T } = {};
      nextEqnueueItemIndex = 0;
      lastDecquedItem = 0;
      enque(item: T) {
        this.data[this.nextEqnueueItemIndex] = item;
        this.nextEqnueueItemIndex++;
      }
      dequedItem(): T {
        const dequedItem = this.data[this.lastDecquedItem];
        delete this.data[this.lastDecquedItem];
        this.lastDecquedItem++;
        return dequedItem;
      }
      size() {
        return this.nextEqnueueItemIndex - this.lastDecquedItem;
      }
    }
    let queue = new Queue<number>();
    queue.enque(4);
    queue.enque(6);
    queue.enque(8);
    console.log(queue.dequedItem());
    console.log(queue);
    console.log(queue.size());
  }
  binarySearch(
    arr: number[],
    searchItem: number,
    start = 0,
    end = arr.length
  ): number {
    if (start > end) return -1;
    const middle = Math.floor((start + end) / 2);

    return searchItem === arr[middle]
      ? middle
      : searchItem < arr[middle]
      ? this.binarySearch(arr, searchItem, start, middle - 1)
      : this.binarySearch(arr, searchItem, middle + 1, end);
    return -1;
  }
  binarySearchLogic() {
    let arr = [1, 20, 2, 9, 3, 11, 4].sort((a, b) => (a = b));
    this.binarySearch(arr, 9);
  }

  bubbleSortLogic() {
    // very basic first step
    let arr = [1, 20, 2, 9, 3, 11, 4];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // let temp1 = arr[j+1];
          // arr[j+1] =  arr[j]
          // arr[j] = temp1;
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  }

  checkAnyCombinationIsPalindrom = () => {
    const a: string = 'civic'; // use "cccc" or any combination
    let chartSet = new Set();
    for (let char of a.split('')) {
      if (chartSet.has(char)) chartSet.delete(char);
      else chartSet.add(char);
    }
    return chartSet.size <= 1 ? true : false;
  };

  checkAnnagrams(): boolean {
    let s1: string = 'heart';
    let s2: string = 'earth';
    let charactCount = new Map<string, number>();
    for (const char of s1.split('')) {
      charactCount.set(char, (charactCount.get(char) || 0) + 1);
    }
    //console.log(charactCount);

    for (const char of s2.split('')) {
      if (!charactCount.has(char)) return false;
      charactCount.set(char, charactCount.get(char)! - 1);
    }
    //console.log(charactCount);

    return Array.from(charactCount.values()).every((value) => value === 0);
  }
}

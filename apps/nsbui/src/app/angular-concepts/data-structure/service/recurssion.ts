import { Injectable } from '@angular/core';
import { merge } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Recursion {
  constructor() {}

  // simple basic logic to use recurssion in order to find number in array
  hasSix(arr: any[], find: number): boolean {
    let found = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === find) {
        return true;
      }
      if (Array.isArray(arr[i])) {
        return this.hasSix(arr[i], find);
      }
    }

    return found;
  }

  // use recurssion to find the sum of n elements in array
  sum(arr: any): number {
    if (arr.length === 0) return 0; // base condition
    return arr[0] + this.sum(arr.slice(1));
  }
}

import { Injectable } from '@angular/core';
import { merge } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  constructor() {}

  findConsecutiveMaxCommonCharInString(str: string) {
    let longest = { char: '', count: 0 };
    let current = { char: '', count: 0 };
    for (let char of str) {
      if (char === current.char) {
        current.count++;
      } else {
        current = { char, count: 1 };
      }
      if (longest.count < current.count) {
        longest = { ...current };
      }
    }
    return longest;
  }
}

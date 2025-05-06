import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  binarySearch(
    arr: number[],
    element: number,
    start = 0,
    end = arr.length
  ): number {

    console.log(" binary search calling")
    let index = -1;
    if (start > end) {
      return -1;
    }
    let mid = Math.floor((start + end) / 2);
    return element === arr[mid]
      ? mid
      : element > arr[mid]
      ? this.binarySearch(arr, element, mid + 1, end)
      : this.binarySearch(arr, element, 0, mid - 1);
  }
}

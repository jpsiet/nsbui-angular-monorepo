import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MergeArrayProblemService {
  constructor() {}
  // merge two sorted array
  mergeArr(arr1: number[], arr2: number[]) {
    const length1 = arr1.length;
    const lenght2 = arr2.length;
    let mergArr = [];
    let pa1 = 0;
    let pa2 = 0;
    while (pa1 < length1 && pa2 < lenght2) {
      if (arr1[pa1] > arr2[pa2]) {
        mergArr.push(arr2[pa2++]);
      } else {
        mergArr.push(arr1[pa1++]);
      }
    }
    while (pa1 < length1) {
      mergArr.push(arr1[pa1++]);
    }
    while (pa2 < lenght2) {
      mergArr.push(arr2[pa2++]);
    }
    return mergArr;
  }
  median(arr: number[]) {
    console.log(arr);
    let mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
      return (arr[mid] + arr[mid - 1]) / 2;
    } else {
      return arr[mid];
    }
  }

  findMedianOfTwoArray(arr1: number[], arr2: number[]): number {
    return this.median(this.mergeArr(arr1, arr2));
  }

  reverseInteg(num: number) {
    const isNegative = num < 0 ? true : false;
    let final = 0;

    if (isNegative) {
      num = Math.abs(num);
    }
    let length = Math.floor(Math.log10(num)) + 1;

    let remainder: number = num;
    for (let i = length - 1; i > -1; i--) {
      let digit = Math.floor(remainder / 10 ** i);
      remainder = Math.floor(num % 10 ** i);
      final = final + digit * 10 ** (length - i - 1);
    }
    return isNegative ? -final : final;
  }

  reverseArr(arr: number[]) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }

    return arr;
  }

  reverseArrRecur(arr: number[], start: number, end: number): number[] {
    if (start > end) {
      return arr;
    }
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++, end--;

    return this.reverseArrRecur(arr, start, end);
  }

  checkForAnagram(a: string, b: string): boolean {
    let lenstr1 = a.length;
    let lenStr2 = b.length;
    if (lenstr1 < 1 || lenStr2 < 1 || lenstr1 != lenStr2) return false;

    // create a map
    let charCountMap: Map<string, number> = new Map();
    for (let i = 0; i < lenstr1; i++) {
      charCountMap.set(a[i], (charCountMap.get(a[i]) || 0) + 1);
    }
    for (let j = 0; j < lenStr2; j++) {
      let tempVal = charCountMap.get(b[j]);
      if (!tempVal) {
        return false;
      } else {
        charCountMap.set(b[j], tempVal - 1);
      }
    }
    return Array.from(charCountMap.values()).every((val) => val === 0);
  }


}

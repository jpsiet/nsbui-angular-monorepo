import { Injectable } from '@angular/core';
import { merge } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  constructor() {}

  // Merge two sorted array
  mergeTwoSortedArray(
    firstSorteArr: number[] = [1, 3, 5, 7],
    secondSortedAr: number[] = [2, 4, 6, 9, 11]
  ) {
    // create Third Array
    let merged = [];
    // first array Index
    let i = 0;
    // secondArray Index
    let j = 0;
    // merged sorted array Index
    let k = 0;

    while (i < firstSorteArr.length && j < secondSortedAr.length) {
      if (firstSorteArr[i] < secondSortedAr[j]) {
        merged[k++] = firstSorteArr[i++];
      } else {
        merged[k++] = secondSortedAr[j++];
      }
    }

    while (i < firstSorteArr.length) {
      merged[k++] = firstSorteArr[i++];
    }
    while (j < secondSortedAr.length) {
      merged[k++] = secondSortedAr[j++];
    }
    return merged;
  }

  mergeArry(lArray: number[], rArray: number[]): number[] {
    let result: number[] = [];
    let lLength = lArray.length;
    let rLength = rArray.length;
    let lIndex = 0;
    let rIndex = 0;
    while (lIndex < lLength && rIndex < rLength) {
      if (lArray[lIndex] > rArray[rIndex]) {
        result.push(rArray[rIndex++]);
      } else {
        result.push(lArray[lIndex++]);
      }
    }

    while (lIndex < lLength) {
      result.push(lArray[lIndex++]);
    }
    while (rIndex < rLength) {
      result.push(rArray[rIndex++]);
    }

    console.log('result/ merge Array ==> ' + result);
    return result;
  }

  mergeSort(arr: number[]): number[] {
    if (arr.length < 2) {
      return arr;
    }
    arr = arr.slice();
    let mid = Math.floor(arr.length / 2);
    let lArr = arr.slice(0, mid);
    let rArr = arr.slice(mid);
    console.log('lArr ===> ' + lArr);
    console.log('rArr ===> ' + rArr);
    return this.mergeArry(this.mergeSort(lArr), this.mergeSort(rArr));
  }
}

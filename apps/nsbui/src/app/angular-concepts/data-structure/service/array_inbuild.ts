import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArrayInBuildService {
  // Array  in build map logic
// Mutate ===
//fill ==  method changes all elements in an array
//Non Mutate
// EVERY  => method tests  all elements . It returns a Boolean value
// Filter ===> creates a new array, who satisefied the given condition
// Map // return a new copy of  modified Arr

  constructor() {}
  makeFlatArray() {
    let flattenArray = <T extends unknown>(arg: (T | T[])[]): T[] => {
      const flattenArr = <T extends unknown>(arr: (T | T[])[]): T[] => {
        let result: T[] = [];
        for (let val of arr) {
          if (Array.isArray(val)) {
            result.push(...val);
          } else {
            result.push(val);
          }
        }
        return result;
      };
      return flattenArr(arg);
    };

    let strings = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ];
    const numbers = [0, 1, 2, [3, 4], 5, [6], [7], 8, [9]];
    return flattenArray(strings);
  }

  shuffleArray(arr:number[]){
    arr = arr.slice();
    arr.forEach((item, index) => {
       const random = index+ Math.floor(Math.random()*(arr.length-index));
       [arr[index], arr[random]] = [arr[random], arr[index]]
   })
   return arr;
  }



}

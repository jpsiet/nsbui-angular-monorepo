import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArraySumPairsService {
  constructor() {}

  findPairO2(a: number[], target: number): number[][] {
    let result = [];
    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j < a.length; j++) {
        if (a[i] + a[j] === target) result.push([i, j]);
      }
    }
    return result;
  }

  findPairON(a: number[], target: number): number[][] {
    let result = [];
    let map: Map<number, number> = new Map();
    for (let i = 0; i < a.length; i++) {
      let counterNumber = target - a[i];
      console.log(map);
      console.log(counterNumber);
      if (map.has(a[i])) {
        console.log(' found counter');
        result.push([map.get(counterNumber) || 0, i]);
      } else {
        map.set(counterNumber, i);
      }
    }
    return result;
  }

  rotateArrayByKTimes(a: number[], k: number): number[] {
    console.log(a);

    let arr = a.slice();
    // remove last K element
    let result = arr.splice(arr.length - k, k);
    console.log(result);

    // now push left over arr element at the end of temp == length ( n-k)
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i]);
    }

    return result;
  }

  permuations(str: string): string[] | string {
    if (str.length < 2) return str;
    let result: string[] = [];
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let remainingString = str.slice(0, i) + str.slice(i + 1);
      // const pmString = permuations(remainingString);
      // console.log("permuations(remainingString) ==" + pmString);
      //  result = (permuations(remainingString) as string[]).map( (item:string) => char+item);
      for (let item of this.permuations(remainingString)) {
        result.push(char + item);
        console.log('result');
        console.log(result);
      }
    }
    return result;
  }
}

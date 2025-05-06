import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BinaryOperatorService {
  constructor() {}

  bitWiseAndOperator() {
    let a = 1; //01
    let b = 1; // 01
    console.log(a & b);

    // a b	a AND b
    // 0	0	0
    // 0	1	0
    // 1	0	0
    // 1	1	1
  }



  bitWiseAndAssignment() {
    let a = 5; // 00000000000000000000000000000101 (16 bit..)
    a &= 3; // 00000000000000000000000000000011

    console.log(a); // 00000000000000000000000000000001
    // expected output: 1
  }

  bitWiseOROperator() {
    let a = 1; //01
    let b = 1; // 01
    console.log(a | b);
    // a b	a AND b
    // 0	0	0
    // 0	1	1
    // 1	0	1
    // 1	1	1
  }

  bitWiseXOROperator() {
    let a = 1; //01
    let b = 1; // 01
    console.log(a ^ b);
    // a b	a AND b
    // 0	0	0
    // 0	1	1
    // 1	0	1
    // 1	1	0
  }
}

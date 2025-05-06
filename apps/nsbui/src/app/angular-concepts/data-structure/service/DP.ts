import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DynamicProgramming {
  constructor() {}
  // complexisty 2powN
  // starting recusrrion from index max length, using  recurssion, no memoziation
  lcsTINC(s1: string, s2: string, m: number, n: number): number {
    if (m == 0 || n == 0) {
      return 0;
    }

    if (s1[m - 1] === s2[n - 1]) {
      return this.lcsTINC(s1, s2, m - 1, n - 1) + 1;
    } else {
      return Math.max(
        this.lcsTINC(s1, s2, m - 1, n),
        this.lcsTINC(s1, s2, m, n - 1)
      );
    }
  }

  // complexisty 2powN
  // starting recusrrion from index 0, using  recurssion, no memoziation
  lcsSINC(s1: string, s2: string, m: number, n: number): number {
    if (m > s1.length - 1 || n > s2.length - 1) {
      return 0;
    }
    if (s1[m - 1] === s2[n - 1]) {
      return this.lcsSINC(s1, s2, m + 1, n + 1) + 1;
    } else {
      return Math.max(
        this.lcsSINC(s1, s2, m + 1, n),
        this.lcsSINC(s1, s2, m, n + 1)
      );
    }
  }

  lcsDynamicP(s1: string, s2: string, m: number, n: number) {
    let table = new Array(m + 1);
    for (let i = 0; i < table.length; i++) {
      table[i] = new Array(n + 1);
    }
    for (let i = 0; i < m + 1; i++) {
      for (let j = 0; j < n + 1; j++) {
        if (i === 0 || j === 0) {
          table[i][j] = 0;
        }
        // Matched so 1+ previous digoanl calcuation
        else if (s1[m - 1] === s2[n - 1]) {
          table[i][j] = table[i - 1][j - 1] + 1;
        } else {
          // didn't Matched so Max of  previous row cell and prevous column cell
          table[i][j] = Math.max(table[i][j - 1], table[i - 1][j]);
        }
      }
    }

    return table[m][n];
  }

  lcsDynamicPPrint(s1: string, s2: string, m: number, n: number) {
    let table = new Array(m + 1);
    for (let i = 0; i < table.length; i++) {
      table[i] = new Array(n + 1);
    }
    for (let i = 0; i < m + 1; i++) {
      for (let j = 0; j < n + 1; j++) {
        if (i === 0 || j === 0) {
          table[i][j] = 0;
        }
        // Matched so 1+ previous digoanl calcuation
        else if (s1[m - 1] === s2[n - 1]) {
          table[i][j] = table[i - 1][j - 1] + 1;
        } else {
          // didn't Matched so Max of  previous row cell and prevous column cell
          table[i][j] = Math.max(table[i][j - 1], table[i - 1][j]);
        }
      }
    }
    let i = m;
    let j = n;
    let str = '';
    while (i > 0 && j > 0) {
        if (s1[i - 1] === s2[j - 1]) {
          str += s1[i - 1];
          i--;
          j--;
        } else {
          if (table[i][j - 1] > table[i - 1][j]) {
            j--;
          } else {
            i--;
          }
        }
    }

    console.log(str.split("").reverse().join(""));
  }
}

import { Injectable } from '@angular/core';
interface Person {
  [name: string]: string; // name specific //[key:string]?: string; // in case you don't know key
}

@Injectable({
  providedIn: 'root',
})
export class Es6ArrayService {
  constructor() { }



  reduceThreeDimensionalArray(){
    let arr = [[1,2],[]]
  }


  reduceArrayitem() {
    let items = [1, 3, 5, 6, , 3, 2, 1];

    //console.log(items.reduce ( (acc:any,curr:any) => acc+ curr)); // if no value passed then acc will be firsrt value
    //1 and curr will be 2

    //console.log(items.reduce ( (acc:any,curr:any) => acc+ curr,0)); // if no value passed then acc will be firsrt value
    //1 and curr will be 2

    // with reduce you can make   object of items with key object
    const users = [
      { id: '01', name: 'jitendra' },
      { id: '02', name: 'manviya' },
    ];
    const reducedUsers = users.reduce((acc: any, user) => {
      let key = user.id;
      acc[key] = user;
      return acc;
    }, {});

    // console.log(reducedUsers);
    //  duplicates items in array and keep track of count of them

    let arr: string[] = [
      'angular',
      'react',
      'vue',
      'next',
      'angular',
      'react',
      'vue',
      'next',
      'angular',
      'react',
      'java',
      'spring',
      'java',
    ];
    let trackFrameK = {};
    arr.reduce((acc: any, curr) => {
      if (!acc[curr]) {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }
      return acc;
    }, trackFrameK);

    // console.log(trackFrameK);
    // always try to uitlize the loop logic don't go with operator

    // toDO:  take a big array and  return only even nuber with double value
    let bigData = [];
    for (var i = 0; i < 1000000; i++) {
      bigData.push(i);
    }
    // filter and map logic

    console.time('Filterandmap');
    const bigDataMapandFilter = bigData
      .filter((num) => num % 2 === 0)
      .map((num) => num * 2);
    console.timeEnd('Filterandmap');
    // 46 ms taking more time
    // now with reduce
    console.time('reduce');
    // console.log(bigDataMapandFilter);
    const bigDatareduce = bigData.reduce((acc: any, curr) => {
      if (curr % 2 === 0) {
        acc.push(curr * 2);
      }
      return acc;
    }, []);
    // console.log(bigDatareduce);
    //taking 38ms less than above
    console.timeEnd('reduce');
  }

  arraySomeAndEvery() {
    let items = [8, 1, 3, 4, 5, 8];
    // it will return the moment it will find true other wise continue to run
    // calling some logic ==> 8  result =>true
    const resultSome = items.some((item) => {
      console.log('calling some logic ==> ' + item);
      return item > 5;
    });

    console.log('some result =>' + resultSome);
    // it will return the moment it will find false other wise continue to run
    // calling Every logic ==> 8 calling Every logic ==> 1 Every result =>false
    const resultEvery = items.every((item) => {
      console.log('calling Every logic ==> ' + item);
      return item > 5;
    });

    console.log('Every result =>' + resultEvery);
  }
  arraySortingLogic() {
    let item: number[] = [1, 20, 30, 100, 40];
    let itemStr: string[] = ['ram', 'shyam', 'vayu', 'mayra'];

    // console.log(item.sort())  //[1, 100, 20, 30, 40] by default it will convert into string then sort
    //  console.log(item.sort( (a,b)=>a-b))  //asscending
    //console.log(item.sort( (a,b)=>b-a))  //asscending
    // if you want to sort based on lengtg
    console.log(itemStr.sort((a, b) => a.length - b.length));
    // sort string need to to compare with greater and less than operator
    console.log(
      itemStr.sort((a: string, b: string) => {
        let nameA = a.toUpperCase(); // ignore upper and lowercase
        let nameB = b.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      })
    );
  }
  sliceAndReduce() {
    let person: Person = {
      name: 'Jitendra -  singh',
    };

    let filters: { [desulgisy: string]: any } = {
      desulgisy: (x: string) => x.replace('-', ' '),
      upperCase: (x: string) => x.toUpperCase(),
    };
    let input = 'name| desulgisy|upperCase ';
    let sections: string[] = input.split('|').map((x) => x.trim());
    let nameRef: string = sections[0];
    /// const obj: {[key:string]: string;} = { one: 'one' };
    //Element implicitly has an 'any' type because expression of type 'string' can't be used
    // to index type 'Person'.
    // or you can define in interface
    let ref = person[nameRef];
    let output = sections.slice(1).reduce((acc, curr) => {
      if (filters[curr]) {
        return filters[curr](acc);
      }
    }, ref);
    console.log(output);
  }
}

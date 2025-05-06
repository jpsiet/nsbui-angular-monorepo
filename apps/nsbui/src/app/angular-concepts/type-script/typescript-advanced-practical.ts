import { Injectable } from '@angular/core';
// reference of this sample is https://egghead.io/courses/practical-advanced-typescript
@Injectable()
export class TypeScriptAdvancedPractical {

  dynamicAllFunTypeWithCond() {

    // based on this type T we can defined other attribute type
    // interface type based on conditional type
    type Item<T> = {
      id: T,
      content: T extends string ? string[] : number[];
    }

    let apple: Item<number> = {
      id: 1,
      content: [1, 2, 3]
    };
    console.log(apple.id.toFixed(2)); // type script allow all numeric method here
    let orange: Item<string> = {
      id: '2',
      content: ['2', '3']
    };
    console.log(orange.id.toUpperCase()); // type script allow all string method here

    // make string or numbers of array opeartor
    // never return type always  ignore in case of union type
   type ArrayFilter<T>  = T extends any[]?T:never;
   type StringsOrNumber = ArrayFilter<string|number|string[]|number[]>;

 // function type   condtional

    interface Book{
        id:string;
        contennts:string[]
      }

      interface Tv{
        id:number;
        digonal:number;
      }

      interface ItemService{
        getItem<T extends number|string>(id:T): T extends number? Tv:Book;
      }
}
}


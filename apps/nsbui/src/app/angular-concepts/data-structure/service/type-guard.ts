import { Injectable } from '@angular/core';
import { merge } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TypeGuardService {
  constructor() {}

  unionType() {
    //  Variable 'foo' is used before being assigned, just add  undefined and union type
    let foo: number | undefined;
    console.log(foo);

    type thing = string | number | boolean | string[] | number[];

    let doSomething = (something: thing) => {
      if (
        typeof something === 'string' ||
        typeof something === 'number' ||
        typeof something === 'boolean'
      ) {
        return typeof something + ' => ' + something;
      }
      if (something instanceof Array) {
        return something.join('===>');
      }

      return something;
    };

    // console.log(doSomething("abc"));
    // console.log(doSomething(123));
    // console.log(doSomething(true));
    return doSomething([1, 2, 3]);
  }

  classTypeCast() {
    interface GoodGuyI {
      study: boolean;
      reading: () => boolean;
    }
    class GoodGuy implements GoodGuyI {
      study = true;
      reading() {
        return this.study;
      }
    }

    interface BadGuyI {
      play: boolean;
      activity: () => boolean;
    }
    class BadGuy implements BadGuyI {
      play = true;
      activity() {
        return this.play;
      }
    }

    let doActivty = (arg: GoodGuy | BadGuy) => {
      if ((arg as GoodGuy).study) {
        console.log('good guy' + arg);
      } else {
        console.log('bad guy' + arg);
      }
    };
    let good = new GoodGuy();
    let bad = new BadGuy();
    //doActivty(good);
    doActivty(bad);
  }

  //  this function is generic to and flat the array element
  genericFlatFunction() {
    const numbers = ['a', 'b'];

    let checkForArray = <T extends unknown>(elem: T | T[]) =>
      Array.isArray(elem);

    let isFlat = <T extends unknown>(arg: (T | T[])[]): boolean => {
      return !arg.some(checkForArray);
    };

    return isFlat(numbers);
  }

  //  implement forcefully to handle all switch case, in  below example if you missed any condition to handle
  // properly you will get error  like function showing error as  we didnt handle XS case

  // handleAllSwitchCase(){

  //   enum ShirtSize {
  //     XS,
  //     S,
  //     M,
  //     L,
  //     XL
  //   }

  //   function assertNever(value: never): never {
  //     // throw Error(`Unexpected value '${value}'`)
  //     // Adjusted for plunker output
  //     console.log(Error(`Unexpected value '${value}'`));
  //   }

  //   function prettyPrint(size: ShirtSize) {
  //     switch (size) {
  //         case ShirtSize.S: console.log("small");
  //         case ShirtSize.M: return "medium";
  //         case ShirtSize.L: return "large";

  //         // [ts] Argument of type 'ShirtSize.XS' is
  //         // not assignable to parameter of type 'never'.
  //         default: return assertNever(size);
  //     }
  //   }

  //   prettyPrint(ShirtSize.S)
  //   prettyPrint(ShirtSize.XXL)
  // }

  //Model Alternatives with Discriminated Union Types in TypeScript
  //TypeScript’s discriminated union types (aka tagged union types) allow you to model a finite set of
  //alternative object shapes in the type system. The compiler helps you introduce fewer bugs by only
  // exposing properties that are known to be safe to access at a given location. This lesson shows you
  // how to define a generic Result<T> type with a success case and a failure case. It also illustrates
  // how you could use discriminated unions to model various payment methods
  discriminatedUnionConcept1() {
    type Result<T> =
      | { success: true; value: T }
      | { success: false; error: string };

    function tryParseInt(text: string): Result<number> {
      if (/^-?\d+$/.test(text)) {
        return {
          success: true,
          value: parseInt(text, 10),
        };
      }
      return {
        success: false,
        error: 'Invalid number format',
      };
    }

    const result = tryParseInt('42');

    if (result.success) {
      result;
      console.log(result.value);
    } else {
      result;
    }
  }

  discriminatedUnionConcept2() {

   
  }

 //  here interface point we converted into string.. also  added optional nullable
 //  or stringify logic which convert all type string.. also  add partial type
  convertTypeGeneric(){

    interface Point {
      x: number,
      y: number,
  }

  type Nullable<T> = {
      [p in keyof T]: T[p] | null
  }

  type stringify<T>  = {
      [p in keyof T]:string
  }
  type NullablePoint = Partial<Nullable<stringify<Point>>>
  let nullPoint: NullablePoint = {
      x: 'abc'}
  }
}

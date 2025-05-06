import { Injectable } from '@angular/core';
import { BaseRouteReuseStrategy } from '@angular/router';
//reference https://egghead.io/courses/typescript-tips-and-tricks-20c4
@Injectable()
export class TypeScriptBasics {
  //name:string; //Property 'name' has no initializer and is not definitely assigned in the constructor.ts(2564)
  // // Not initialized, but no error
  name!: string;
  //Fields may be prefixed with the readonly modifier.
  // This prevents assignments to the field outside of the constructor.
  constructor() { }
  handleOptionalProperty() {
    let printName = (obj: { first: string; last?: string }) => {
      // Error - might crash if 'obj.last' wasn't provided!
      // console.log(obj.last.toUpperCase());
      // Object is possibly 'undefined'.
      if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
      }

      // A safe alternative using modern JavaScript syntax:
      console.log(obj.last?.toUpperCase());
    };
    printName({ first: 'jitendra', last: 'singh' });
  }

  createUnionType() {
    function printId(id: number | string) {
      console.log('Your ID is: ' + id);
    }
    // OK
    //printId(101);
    // OK
    //printId("202");
    // Error
    // printId({ myID: 22342 }); can't do like

    function printIdT(x: number | string[] | string) {
      //console.log(id.toUpperCase()); // you can't put one type operation
      // you can do like this
      if (typeof x === 'string') {
        // In this branch, id is of type 'string'
        console.log(x.toUpperCase());
      }
      if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log('Hello, ' + x.join(' and '));
      } else {
        // Here, id is of type 'number'
        console.log(x);
      }
    }
    // printIdT('abc');
    // printIdT(202);
    // printIdT(['1', '2', '3']);

    // if both type have some common method  then it's easy
    // Return type is inferred as number[] | string
    function getFirstThree(x: number[] | string) {
      return x.slice(0, 3);
    }
    console.log(getFirstThree('abcdef'));
    console.log(getFirstThree([1, 2, 3, 4]));
  }

  // An interface declaration is another way to name an object type
  createInterFace() {
    interface Point {
      x: number;
      y: number;
    }

    function printCoord(pt: Point) {
      console.log("The coordinate's x value is " + pt.x);
      console.log("The coordinate's y value is " + pt.y);
    }

    printCoord({ x: 100, y: 100 });
    // Just like when we used a type alias above, the example works just as if we had
    // used an anonymous object type. TypeScript is only concerned with the structure of the
    //value we passed to printCoord - it only cares that it has the expected properties.
    // Being concerned only with the structure and capabilities of types is why we call
    //TypeScript a structurally typed type system.
  }

  differenceBetweenTypeAliasesAndInterface() {
    interface Animal {
      name: string;
    }
    //Extending an interface
    interface Bear extends Animal {
      honey: boolean;
    }
    const animalOb: Animal = { name: 'dog' };
    const bearOb: Bear = { name: 'dog', honey: false };

    type AnimalT = {
      name: string;
    };
    type BearT = AnimalT & {
      honey: boolean;
    };
    const animalObT: AnimalT = { name: 'dog' };
    const bearObT: BearT = { name: 'dog', honey: false };

    //Adding new fields to an existing interface
    interface Window {
      title: string;
    }

    interface Window {
      type: string;
    }

    const window: Window = { title: 'door', type: 'glass' };

    //A type cannot be changed after being created

    type WindowT = {
      title: string;
    };

    // // Error: Duplicate identifier 'Window'.
    //  type WindowT  = {
    //   type: string
    //  }

    type  home = WindowT|AnimalT;
     let home:home = {title:'door'};

     // you can't put or operator with interface

    //TypeScript only allows type assertions which convert to a more specific or less specific
    //version of a type. This rule prevents “impossible” coercions like:
    //const x = "hello" as number;
    // Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently
    //overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  }

  createLiteralType() {
    // But by combining literals into unions, you can express a much more useful concept
    //- for example, functions that only accept a certain set of known values:

    function printText(s: string, alignment: 'left' | 'right' | 'center') {
      // ...
    }
    printText('Hello, world', 'left');
    // printText("G'day, mate", "centre");// not possible as spelling mistake

    //Numeric literal types work the same way:

    function compare(a: string, b: string): -1 | 0 | 1 {
      return a === b ? 0 : a > b ? 1 : -1;
    }

    // you can put same logic in object literal

    interface Options {
      width: number;
    }
    function configure(x: Options | 'auto') {
      // ...
    }
    configure({ width: 100 }); // you can pass width
    configure('auto'); // you can pass "auto"
    // configure("automatic"); // but not "automatic"
  }
  //As with other JavaScript language features, TypeScript adds type annotations and other syntax to
  //allow you to express relationships between classes and other types.
  classWithTypeScript() {
    // read only
    class Greeter {
      readonly name: string = 'Jitendra';

      constructor(otherName?: string) {
        if (otherName !== undefined) {
          this.name = otherName;
        }
      }

      err() {
        //  this.name = "not ok"; // as it is readonly you can not assign out side of constructor
        //    Cannot assign to 'name' because it is a read-only property.
      }
    }
    const g = new Greeter();
    // g.name = "also not ok";  //Cannot assign to 'name' because it is a read-only property.
    console.log(g.name);
    // you can overload as much as you want
    class Point {
      // Overloads
      constructor(x: number, y: string);
      constructor(s: string);
      constructor(xs: any, y?: any) {
        // TBD
      }
      //Constructors can’t have type parameters - these belong on the outer class declaration,
      //which we’ll learn about later
      //Constructors can’t have return type annotations - the class instance type is always what’s returned
    }
  }
  //Just as in JavaScript, if you have a base class, you’ll need to call super();
  //in your constructor body before using any this. members:
  classSuperClass() {
    class Base {
      k = 4;
    }

    class Derived extends Base {
      constructor() {
        // Prints a wrong value in ES5; throws exception in ES6
        super();
        console.log(this.k);
        //'super' must be called before accessing 'this' in the constructor of a derived class.

      }
    }

  }

  classInterFace() {
    interface Checkable {
      check(name: string): boolean;
    }

    class NameChecker implements Checkable {
      check(s: string) { // you need to make as string implicit

        return s.toLowerCase() === "ok";

      }
    }
    // implementing an interface with an optional property doesn’t create that property:
    interface A {
      x: number;
      y?: number;
    }
    class C implements A {
      x = 0;
    }
    const c = new C();
    //c.y = 10; // will throw error
  }

  overridingMethodInClass() {

   class Base {
      greet() {
        console.log("Hello, world!");
      }
    }

    class Derived extends Base {
      override greet(name?: string) {
        if (name === undefined) {
          super.greet();
        } else {
          console.log(`Hello, ${name.toUpperCase()}`);
        }
      }
      // greet(name:string){ // can't make like you are breaking contract
      //  return "Hi I can't do"
      // }

      // greet():string{ // you should not do like this too as it will break the contract return higher type
      //   return "Hi I can't do"
      //  }
    }
    const d = new Derived();
    d.greet();
    //d.greet("reader");
    // Alias the derived instance through a base class reference
    const b: Base = d;
    // No problem
    b.greet();
    // so dervied class should always follow base /super class contract

  }
}

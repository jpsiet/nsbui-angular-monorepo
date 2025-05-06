
@Frozen
class IceCream {}

function Frozen(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

console.log(Object.isFrozen(IceCream)); // true

class FroYo extends IceCream {} // error, cannot be extended

let froYo:FroYo  =   new FroYo();






@Frozen
export class SqaureCalculator  {

  constructor() { }

  area(length:number,height:number): number {
    return length*height;
  }

}

console.log(Object.isFrozen( new SqaureCalculator()))

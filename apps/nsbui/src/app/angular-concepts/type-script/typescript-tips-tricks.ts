import { Injectable } from '@angular/core';
//reference https://egghead.io/courses/typescript-tips-and-tricks-20c4
@Injectable()
export class TypeScriptTipsTricks {
  createPartialType() {
    type PERSONT = {
      name: string;
      job?: string;
      location: string;
      // add any number of unknow property , and that's not required
      [key: string]: any;
    };
    // you can use partial type, which will not complain about optional logic
    type partialPerson = Partial<PERSONT>;
    let partialPerson: partialPerson = {
      name: 'jitendra',
    };
    console.log(partialPerson.name);
  }

  // you can pick some specific type
  PickSomeType() {
    type PERSONT = {
      name: string;
      job?: string;
      location: string;
    };
    //you can pick some specific type
    type previewPerson = Pick<PERSONT, 'name' | 'job'>;
    let previewPerson: previewPerson = {
      name: 'jitendra',
    };
    console.log(previewPerson.name);
  }

  // you can omit any attribute
  OmitSomeType() {
    type PERSONT = {
      name: string;
      job?: string;
      location: string;
    };
    //you can pick some specific type
    // you can any attribute from new type
    type locationLessPerson = Omit<PERSONT, 'location'>;
    let locationLessPerson: locationLessPerson = {
      name: 'jitendra',
    };
    console.log(locationLessPerson.name);
  }

  // mark all field Required
  requriedAllExistingTypeAtrr() {
    type PERSONT = {
      name: string;
      job?: string;
      location: string;
    };
    const requiredPerson: Required<PERSONT> = {
      name: 'Jitendra',
      job: 'jobFront End',
      location: 'bosoton',
    };
    console.log(requiredPerson.name);
  }
  makeConstObject() {
    const person = {
      name: 'Jitendra',
      job: 'frontEnd',
    };

    // person = {} // not possible as const
    // person.job = "full stack" // can do and same in  goes with array

    const employee = ['Jitendra', 'frontEnd'] as const;
    //employee.job = "changed" // now not possible
    console.log(employee);
  }

  makeTypeReadOnly() {
    type Person = {
      name: string;
      job: string;
    };

    let person: Person = {
      name: 'Jitendra',
      job: 'frontEnd',
    };

    person.job = 'full stack';

    // you can mark some property read only can't update
    type PersonR = {
      readonly name: string; // it's only update 1 level  not nested level
      job: string;
    };

    let personR: PersonR = {
      name: 'Jitendra',
      job: 'frontEnd',
    };

    // personR.name = "full stack"; can't do as type script will complain

    // Array some property read only can't update
    type PersonA = {
      readonly name: string; // it's only update 1 level  not nested level,
      // for that we need to do the same
      job: string;
      //readonly skills:Array<string>
      //OR
      readonly skills: string[];
    };

    let personA: PersonA = {
      name: 'Jitendra',
      job: 'frontEnd',
      skills: ['angular', 'typescript'],
    };
    // personA.skills = ["abc"] // can't do as it will complain
    personA.skills.push('css3'); // you can do

    // Array some property read only can't update
    type PersonAR = {
      readonly name: string; // it's only update 1 level  not nested level,
      // for that we need to do the same
      job: string;
      //readonly skills:Readonly<string[]>
      // OR you write  this way
      readonly skills: ReadonlyArray<string>;
    };

    let personAR: PersonAR = {
      name: 'Jitendra',
      job: 'frontEnd',
      skills: ['angular', 'typescript'],
    };
    // personA.skills = ["abc"] // can't do as it will complain
    //personAR.skills.push("css3") // now you can not do

    // Object some property read only can't update
    type PersonO = {
      readonly name: string; // it's only update 1 level  not nested level,
      // for that we need to do the same
      job: string;
      //readonly skills:Array<string>
      //OR
      readonly location: {
        city: string;
        state: string;
      };
    };

    let personO: PersonO = {
      name: 'Jitendra',
      job: 'frontEnd',
      location: {
        city: 'boston',
        state: 'MA',
      },
    };
    // personO.location ={} // can't do as location is readonly
    // you can do like this, for this , but if you don't want to allow then
    // then just mark city as readonly
    personO.location.city = 'NorthBorugh';
  }

  notNullAssertionOperator() {
    type Person = {
      name: string;
      job: string;
      location?: string;
    };
    let person: Person = {
      name: 'Jitendra',
      job: 'frontEnd',
      location: 'boston',
    };

    const name: string = person.name;
    // Type 'string | undefined' is not assignable to type 'string'.
    //Type 'undefined' is not assignable to type 'string'.

    //const location:string = person.location; // can't do as it will complain
    const location: string = person.location as string;
    const location1: string = person.location!; // not null assertion operator
    // keep the same type string and remove the null and undefined check
  }

  createTypeFromGivenType() {
    const user = {
      name: 'jitendra',
      age: 31,
    };
    //type script will automatically create type for this, we can use the same type
    type User = typeof user;
    const user2 = {
      name: 'vayu',
      age: 1,
    };
  }

  createDynamicTypeUsingTemplateLiteral() {
    let eventHandler = (eventType: string) => {
      console.log(' event handling' + eventType);
    };
    eventHandler('click');
    let eventHandlerD = (eventType: `on${string}`) => {
      console.log(' event handling' + eventType);
    };
    //eventHandlerD('click'); // it will complain as type is not starting with on
    eventHandlerD('onclick');
    // In Class constructor if you create property as  public it willbehave as same class instance one
  }

  avoidErrorUsingUnknownTypes() {
    let log = (val: unknown) => {
      if (typeof val === 'string') console.log((val as string).toUpperCase());
      if (typeof val === 'number') console.log((val as number) + 20);
    };
    log('and');
  }

  createMappedTypeUsingRecordType() {
    // create unknow type by this
    type Person = {
      [name: string]: number;
    };

    let person: Person = {
      jitendra: 20,
      vayu: 30,
      job: 1,
      // location:'boston'  // you can't do
    };

    // you can do the same by using Record Type, it will not complain even
    //you can limit number string value like here i am limiting only 4
    type PERSONTYPES = 'jitendra' | 'vayu' | 'mayra' | 'manviya';

    type PersonR = Record<PERSONTYPES, number>;

    let personr: PersonR = {
      jitendra: 38,
      vayu: 1,
      mayra: 5,
      manviya: 33,
      //job:1 // after person type you can't do this
      // location:'boston'  // you can't do as only numberic value allowed
    };

    console.log(personr);
  }

  reduceDuplcateWithGenericType() {
    // here we are making type generic and at then run time we know type and then we cna use
    // type BOX<T> = {
    // make defualt string
    type BOX<T = string> = {
      name: string;
      content: T;
    };
    const stringBox: BOX = {
      name: 'plain',
      content: 'Simple',
    };

    const numberBox: BOX<number> = {
      name: 'plain',
      content: 5,
    };

    console.log(stringBox.content.toUpperCase());
    console.log(numberBox.content * 5);
  }
}

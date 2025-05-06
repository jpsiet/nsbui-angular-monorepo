import { Injectable } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Es6NewFeatureService {
  throttleCounter: number = 0;
  constructor() { }

  // some event follow event flow  like.. click logic not every one like resize,blur
  eventDelegation(target: any) {
    target.nativeElement.addEventListener('click', (event: any) => {
      window.location.href = event.target.innerHTML;
      console.log(' %cchild div called', 'color:green');
      console.log(event.target.innerHTML);
    });
  }

  //Solving sum(a)(b)(c) .....()
  sum = (a: any) => {
    return (b: any) => {
      return b != undefined ? this.sum(a + b) : a;
    };
  };

  // debounce function..
  infiniteArgumentSum() {
    console.log(this.sum(1)(2)());
    console.log(this.sum(1)(2)(3)());
  }

   debounce(func:any, timeout = 2000){
    let timer:any;
    return (...args:any) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

   saveInput(){
    console.log('Saving data');
  }
  processChanges = this.debounce(() => this.saveInput(),3000);

  debounceFun(childDiv: any) {
    childDiv.nativeElement.addEventListener('click', () => {
      console.log("clicking count" + this.throttleCounter++)
      this.processChanges();
    });
  }

  //throttleImp = (func: any, event:any, limitTime: any) => {
  // throttleImp = (func: any, limitTime: any) => {
  //   let flag = true;
  //   let self = this;
  //   return function () {
  //     console.log('looking if we can call function');
  //     if (flag) {
  //      // func.bind(self)();
  //       func();
  //       flag = false;
  //       setTimeout(() => {
  //         flag = true;
  //       }, limitTime);
  //     }
  //   };
  // };

  throttleImp = (func: any, limitTime: any) => {
    let flag = true;
    let self = this;
    return () => {
      console.log('looking if we can call function');
      if (flag) {
        func.bind(self);
        //func();
        flag = false;
        setTimeout(() => {
          flag = true;
        }, limitTime);
      }
    };
  };

  // betterExpensive = (event:any) => this.throttleImp(this.expensivFn,event, 5000);
  betterExpensive = this.throttleImp( () => this.expensivFn(), 5000);

  // betterExpensive() {
  //   let self = this;
  //   console.log("calling better expensiv" , ++this.throttleCounter);
  //   return self.throttleImp(this.expensivFn, 1000);
  // }

  expensivFn() {
    console.log('calling better expensiv ',);
  }

  throttleFn(childDiv: any) {
    childDiv.nativeElement.addEventListener('click', () => {
      this.betterExpensive();
    });
    //childDiv.nativeElement.addEventListener('click', this.betterExpensive.bind(this));
  }
  // learn Event Propgtion logic
  eventpropgation(childDiv: any, parentDiv: any, GrandDiv: any) {
    childDiv.nativeElement.addEventListener(
      'click',
      (event: any) => {
        // event.stopPropagation();
        console.log(' %cchild div called', 'color:green');
      },
      {
        capture: true,
      }
    );

    parentDiv.nativeElement.addEventListener(
      'click',
      (event: any) => {
        console.log(' %c parent div called', 'color:blue');
        event.stopPropagation();
      },
      {
        capture: false,
      }
    );

    GrandDiv.nativeElement.addEventListener(
      'click',
      (event: any) => {
        console.log(' %cchild grand parent called', 'color:red');
        // event.stopPropagation();
      },
      {
        capture: true,
      }
    );
  }

  arrowFunctionLogic() { }

  es6WayCreatingObject() {
    // ES6 way creating object

    let name = 'jitendra';
    let job = 'developer';
    const drive = 'go';

    let user = {
      name,
      job,
      // ES5
      //  go:function(){
      //    console.log("Function decalre as ES5");
      //  }
      // ES6
      // go(){
      //   console.log("Function decalre as ES6");
      // }

      // Even you can  assign as a variable name like  derviedVar
      [drive]: function () {
        console.log('Function decalre as ES6');
      },
    };
    console.log(user.name);
    user.go();
  }

  objectDestructing() {
    // simple
    let [first, , , , second] = [1, 2, 3, 4, 5];
    // console.log('first',first);
    // console.log('second',second);
    let user = {
      name: 'Jitendra',
      role: 'frond ent',
      location: 'bos',
    };
    let { name, location } = user;
    // console.log('name', name);
    //console.log('location', location);
    let peoples = [
      {
        name: 'Jitendra',
        role: 'frond ent',
        location: 'bos',
      },
      {
        name: 'Jitendra22',
        role: 'frond ent2',
        location: 'bos2',
      },
      {
        name: 'Jitendra3',
        role: 'frond ent3',
        location: 'bos3',
      },
    ];

    // peoples.map( ({role})=> console.log(role));
    // will pick second object
    let [, Jitendra2] = peoples;
    console.log(Jitendra2.role);
  }

  restparameter() {
    console.log('Rest parameter');
    let restFn = (...rest: any[]) => {
      console.log({ ...rest });
    };
    restFn([1, 2, 4, 5]);
  }

  backTickTagExample() {
    // tag can be any  name... message will be seprates of values ( dollar brakcet) like here
    // 0: "It's " 1: " I am " and values will be  ${new Date().getHours()} ([21 ])
    // you can manipulate string and value based on condition

    let tag = function (message: any, ...values: any) {
      console.log(message);
      console.log(values);
      //  manipulate string and value based on condition
      if (values[0] < 20) {
        values[1] = 'awake';
      }
      return `${message[0]}`;
    };
    let message = tag`It's ${new Date().getHours()} I am  ${''}`;
    console.log(message);
  }
}

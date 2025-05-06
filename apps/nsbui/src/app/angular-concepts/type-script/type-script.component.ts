import { Component, OnInit } from '@angular/core';
import { BuildAlogrithmsUsingTypeScript } from './build-alogriths-typescript';
import { TypeScriptAdvancedPractical } from './typescript-advanced-practical';
import { TypeScriptBasics } from './typescript-basics';
import { TypeScriptTipsTricks } from './typescript-tips-tricks';

interface PERSON {
  name: string;
  job: string;
  // add any number of unknow property , and that's not required
  [key: string]: any;
}

type PERSONT = {
  name: string;
  job?: string;
  location: string;
  // add any number of unknow property , and that's not required
  [key: string]: any;
}




enum TYPE {
  'GET' = 'GET',
  'POST' = 'POST',
}
// create custom TYPE
type METHOD = 'GET' | 'POST';
@Component({
  selector: 'app-type-script',
  templateUrl: './type-script.component.html',
  styleUrls: ['./type-script.component.scss'],
})
export class TypeScriptComponent implements OnInit {
  person1: PERSON = {
    name: 'Jitendra',
    job: 'front End',
  };
   // marke all field required (even optional one too)


  // even we can pick specific item based on requirment

  person2: PERSON = {
    name: 'Jitendra',
    job: 'front End',
    wfh: 'YES',
    location: 'bosotn',
  };

  constructor(private typeScriptTipsTrick: TypeScriptTipsTricks,
    private typeScriptAdvancedPractical: TypeScriptAdvancedPractical,
    private typeScriptBasics:TypeScriptBasics,
    private buildAlogrithmsTypescripts:BuildAlogrithmsUsingTypeScript) {

    this.buildAlogrithmsTypescripts.linkListWithTypeScript();
  }

  ngOnInit(): void {
    //console.log(this.sayHello('Msg me', TYPE.GET));

    // Object Oriented vs Functional Programming with TypeScript
    //   var sum = function(a){

    //     return function (b) {
    //       return a+b;
    //     }

    // }
    // Functional programming || higher order function
    // this.highOrderFunction();
  }

  appendEmoJi = (fixed: string) => (dynamic: string) => fixed + dynamic;
  rain = this.appendEmoJi('Rain ');
  sunny = this.appendEmoJi('Sunny ');

  highOrderFunction() {
    let arr = ['1', '2', '3'];
    const mdRain = arr.map(this.rain);
    mdRain.map((data) => console.log(data));
    const mdSunny = arr.map(this.sunny);
    mdSunny.map((data) => console.log(data));
  }

  sayHello(msg: string, ln: METHOD) {
    if (ln === TYPE.GET) {
      return `hello ${msg}`;
    } else {
      return `Other Language ${msg}`;
    }
  }
}

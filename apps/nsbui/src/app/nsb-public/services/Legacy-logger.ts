import { ServiceInterface } from "./service-interface";

export const LegacyLogger:ServiceInterface = {
 prefix:'legacy Logger  Root',
count : 0,
 sayHello( from:string):void{
   this.count++;
   console.log(`${this.prefix} legacy Logger ===> ${from} ==>  ${this.count} `);
 }



}

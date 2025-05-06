export interface ServiceInterface {
  prefix: string;
  count:number;
 sayHello: (message:string) => void
}

class  IOSButton{
 type = 'ios';
}
class AnroidButton{
  type ='anroid'
}

class  ABC {
  protected job:string = 'frontEnd'
  constructor(){
  }
}

class Public extends ABC{

 name:string ='Ji' ;
  constructor(){
      super();
  }
}


export class FactoryComponent {

  constructor() { }
  createButton(os:string){
    let abc = new ABC();
  console.log(abc);
  let publicC = new Public();


    // if(os ==='ios'){
    //   return  new IOSButton();
    // }else{
    //   return new AnroidButton();
    // }

  }
}

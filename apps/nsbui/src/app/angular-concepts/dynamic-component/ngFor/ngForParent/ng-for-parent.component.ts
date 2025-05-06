import {
  Component,
  OnInit
} from '@angular/core';

import * as _ from 'lodash';
import { DataObservableService } from '../data_observable';
import { ngFAalysisConfigType, ngFWeightType } from '../ngForChildTypes';



@Component({
  selector: 'ng-for-parent',
  templateUrl: './ng-for-parent.component.html',
  styleUrls: ['./ng-for-parent.component.scss']

})
export class NgForParent  implements OnInit{
  dataLists :ngFAalysisConfigType[] = [{ name: 'Item1',  order:[1,2,3], view:null },
  { name: 'Item2', order:[1,2,3,4],
    view:"A"
  },
    { name: 'Item3', order:[1,4], view:null}
   , { name: 'Item4', order:[1], view:"IA"}
  ];

  dataList:ngFAalysisConfigType[]= [
    { name: 'Item1', order:[1], view:"A"}
  ];

  constructor(private dataObs:DataObservableService){
     }


  ngOnInit(): void {
    console.log("creating ng for parent compponent");
  }


  handleConfigData(){
    const configRandom = Math.ceil(Math.random() * 3 + 1) ;
    //this.dataList= this.dataLists.filter( item => item.order ==random);

    console.log(' items data random nmber', configRandom);

    //reference change will force every time new component ,
    // other option also can be by trackBy dirctive of angular with Ng for
    // if unique id logic
   this.dataList = _.cloneDeep(this.dataLists.filter( item => item.order.length ==configRandom));
}

handleWeightData(){

  const weightRandom = Math.ceil(Math.random() * 10 + 1) ;
  this.dataObs.sendWeightData({  name: 'Proposed' + weightRandom } as ngFWeightType);
}


handleConfigWeightData(){

  const configRandom = Math.ceil(Math.random() * 3 + 1) ;

    this.dataList= _.cloneDeep(this.dataLists.filter( item => item.order.length ==configRandom));
   // now  update view Data
   //  setting view data
    this.dataList.forEach(list =>{
      if(list.view === null){
        console.log(" local view blank so setting global ")
        list.view = ' Global  view';
      }

    })

    setTimeout( ()=>{
      //  as obsrvable comes micro task, which always have priority over macro task
      // but in our case i want it should execute after macro taks like here input task

    const weightRandom = Math.ceil(Math.random() * 10 + 1) ;
    this.dataObs.sendWeightData({  name: 'Proposed' + weightRandom } as ngFWeightType);
    },0)

  }

trackById(index:any, item:any){

  // every time will create new component weather chaning child componnt data or list data
  // so no real time use
  //  if want to recreate  component with only list data changes not component it's self
  //  data changed then w diff reference of list data logic
  const random = Math.ceil(Math.random() * 10000 + 1) ;
  return random;
}



}

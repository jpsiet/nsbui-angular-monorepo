import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnlineService {
  online:boolean = true;
  constructor() {
    setInterval(()=>{
       this.online = Math.random()>0.7?true:false
    },500)
  }
}

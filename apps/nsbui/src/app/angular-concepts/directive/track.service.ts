import { Injectable } from '@angular/core';
import { merge } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private logs:string[] = [];
  constructor() { }

  log(message:string){
    this.logs.push(message);
    console.log(this.logs);
  }


}

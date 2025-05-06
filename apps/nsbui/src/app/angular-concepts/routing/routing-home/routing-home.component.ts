import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-home',
  templateUrl: './routing-home.component.html',
  styleUrls: ['./routing-home.component.scss']
})
export class RoutingHomeComponent  implements OnInit{
  public id:number = 0;
  constructor(private activateRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.id = 0;
    this.activateRoute.url.subscribe( data =>{
     this.id = data.length;
      alert(data.length)
 })
  }



}

import { Component, Inject, inject, Injectable, OnInit, ViewChild } from '@angular/core';
import { SAMPLE_CONFIG } from './config.token';
import { SimpleService } from './di-research/services/simple.service';

@Component({
  selector: 'app-depdency-injection',
  templateUrl: './depdency-injection.component.html',
  styleUrls: [],
  providers:[SimpleService,
  {provide:SAMPLE_CONFIG,useValue:{name:'jitendraa'}}]
})
export class DepdencyInjectionComponent implements OnInit {
  @ViewChild('div') viewChild:any;

  constructor(@Inject(SAMPLE_CONFIG) private sampleconfig:any,private simpleService:SimpleService)
   {
     this.callConfigMethod();
    }

    callConfigMethod(){
      console.log("Inject ===> " + JSON.stringify(this.sampleconfig));
    }

  ngOnInit(): void {

     console.log("simpleService:SimpleService" + this.simpleService.hi());
     console.log(this.viewChild);
  }

}

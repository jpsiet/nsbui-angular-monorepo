import { Component, InjectionToken, OnInit } from '@angular/core';
 export const OPTIONAL_TOKEN = new InjectionToken<OptionalComponent>('optional.token');
@Component({
  selector: 'app-optional',
  templateUrl: './optional.component.html',
  styleUrls: ['./optional.component.scss'],
  providers:[{
    provide:OPTIONAL_TOKEN,useExisting:OptionalComponent
  }]
})
export class OptionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

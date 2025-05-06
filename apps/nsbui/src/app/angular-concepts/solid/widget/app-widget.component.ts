import { Component, ContentChild, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { WidgetBase } from './widget-base';
import { reloadableIF } from './widget-content.interface';
import { RELOADABLE_CONTENT } from './widget-content.token';

@Component({
  selector: 'app-widget',
  template: `
    <div class="header">
      <h1>{{ title }}</h1>
      <button mat-stroked-button (click)="onExportJson()">
        Export as JSON
      </button>
    </div>

    <ng-content></ng-content>
  `,
  styles: [
    `
      :host {
        display: block;
        border: #f0ebeb solid 1px;
        border-radius: 5px;
        padding: 15px;
        background-color: #fafafa;
        width: 300px;
        margin-left: 20px;
      }
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `,
  ],
})
export class AppWidgetComponent extends WidgetBase implements OnInit {
  // loading one child content to call some method on that, but this is voilation of DIP
  // principal as it we are depending on concret implemantion rather than
  // abstraction
  @ContentChild(RELOADABLE_CONTENT)content?:reloadableIF
  constructor() {
    super();
  }

  ngOnInit(): void {}
  ngAfterContentInit():void{
   if(this.content){
     this.content.reload();
   }
  }

  // you can't change return type with non compaitbale with parent or derived class
 // onExportJson():number so or just removed  if you don't want to use {
  // onExportJson() {
  //   console.log("issue with export logic");
  //  }
}

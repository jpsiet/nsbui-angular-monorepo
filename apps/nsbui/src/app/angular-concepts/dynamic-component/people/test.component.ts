/**
 * Simple component to abstract the editing of a person
 * object.
 */

 import { Component, OnInit} from '@angular/core';

 @Component({
   selector: 'app-test-comp',
   template: `
     <div> I am test Component</div>
    <ng-content select="[input], [form-field]"></ng-content>
   `
 })
 export class TestComponent implements OnInit {

   constructor() {

   }

   ngOnInit() {

   }
 }

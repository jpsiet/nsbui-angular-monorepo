import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-event-loop-component',
  templateUrl: './event-loop.component.html',
  styleUrls: ['./event-loop.component.scss']
})
export class EventLoopComponent implements OnInit {

   syncObservable = of('Synchronous Value');

  constructor() { }

  //  Macro task   1. http call 2.  input event like mouse click or keyboard
   // 3. setTimeout and setInterval 4. DOM Rendering / Layout
   // like value changed but in order to reflect in child comp/render

   // Micro Task 1.  promises,  2. async/await, MutationObserver

   // execution first  complete all sequnce then micro task and after that macro


  value = 5;


  ngOnInit(): void {
    console.log('Start');
    this.value = 20;
    console.log(this.value);

setTimeout(() => {
  console.log('Macrotask: setTimeout');
  console.log("afetr time out", this.value);

  // Schedule a microtask to run after the macrotask
  queueMicrotask(() => {
    console.log('Microtask: After macrotask');
  });
}, 0);

// Schedule a microtask immediately
queueMicrotask(() => {
  console.log('Microtask: First');
});

console.log('End');


  }

  handleCustomOrder(){

    console.log('Start');
    this.value = 20;
    console.log(this.value);

setTimeout(() => {
  console.log('Macrotask: setTimeout');
  console.log("afetr time out", this.value);

  // Schedule a microtask to run after the macrotask
  queueMicrotask(() => {
    console.log('Microtask: After macrotask');
  });
}, 0);

// here want to put for later

setTimeout( ()=> {
  queueMicrotask(() => {
    console.log(' Now it will be last');
  });
},0)


console.log('End');

  }


  handleCustomOrderMacroMicro(){

    console.log('Start');
    this.value = 20;
    console.log(this.value);

setTimeout(() => {
  console.log('Macrotask: setTimeout');
  console.log("afetr time out", this.value);

  // Schedule a microtask to run after the macrotask
  queueMicrotask(() => {
    console.log('Microtask: After macrotask');
  });

  setTimeout( ()=>{
    console.log(" should be last")
    },0)
}, 0);

// here want to put for later

setTimeout( ()=> {
  queueMicrotask(() => {
    console.log('Microtask: First');
  });
},0)


console.log('End');


  }


  observableSync(){
    // in general observable async  bt some operator like of... make it sync. so will not go
    // micro task
   console.log("start");
    this.syncObservable.subscribe((value: any) => {
      console.log(value);  // Will log 'Synchronous Value' immediately
    });
     console.log("end");
  }




}

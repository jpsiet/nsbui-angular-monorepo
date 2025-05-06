import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ComponentChildComponent } from '../component-child/component-child.component';

@Component({
  selector: 'app-component-life-cycle',
  templateUrl: './component-life-cycle.component.html',
  styleUrls: ['./component-life-cycle.component.scss']
})
export class ComponentLifeCycleComponent implements OnInit, AfterViewInit {

 @ViewChild('child') componentChildComponent:any;
  constructor() { }

  ngOnInit(): void {
   console.log(this.componentChildComponent);
  }
  ngAfterViewInit(){
    console.log(this.componentChildComponent);
  }

}

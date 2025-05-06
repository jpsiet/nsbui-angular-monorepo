import { Component, OnInit } from '@angular/core';
import { SqaureCalculator } from './SqaureCalculator';

@Component({
  selector: 'app-decoratorannot',
  templateUrl: './decoratorannot.component.html',
  styleUrls: ['./decoratorannot.component.scss']
})
export class DecoratorannotComponent  extends SqaureCalculator implements OnInit {

  sqaureArea!: number;
  constructor() {
    super();
   }

  ngOnInit(): void {
    this.sqaureArea=  this.area(4,5);
  }
  override area(length: number, height: number): number {
      return 30;
  }

}

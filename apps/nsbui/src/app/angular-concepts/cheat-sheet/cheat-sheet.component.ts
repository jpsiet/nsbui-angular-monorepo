import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CheatSheetChild1Component } from './cheat-sheet-child1/cheat-sheet-child1.component';

@Component({
  selector: 'app-cheat-sheet',
  templateUrl: './cheat-sheet.component.html',
  styleUrls: ['./cheat-sheet.component.scss'],
})
export class CheatSheetComponent implements OnInit, AfterViewInit {
  @ViewChildren(CheatSheetChild1Component)
  myChildComponent!: CheatSheetChild1Component;
  @ContentChildren('p1')p1:any;
  constructor() {}
  ngOnInit(): void {}
  contentChild = true;

  ngAfterViewInit(): void {
    {
      console.log(this.p1);
    }
  }
}

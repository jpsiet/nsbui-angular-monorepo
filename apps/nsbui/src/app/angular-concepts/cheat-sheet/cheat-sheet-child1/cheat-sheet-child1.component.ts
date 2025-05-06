import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheat-sheet-child1',
  templateUrl: './cheat-sheet-child1.component.html',
  styleUrls: ['./cheat-sheet-child1.component.scss']
})
export class CheatSheetChild1Component implements OnInit {

  constructor() { }
  @Input() name ="name"

  ngOnInit(): void {
  }

}

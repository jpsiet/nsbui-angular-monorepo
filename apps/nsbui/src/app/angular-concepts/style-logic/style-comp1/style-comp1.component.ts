import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-style-comp1',
  templateUrl: './style-comp1.component.html',
  styleUrls: ['./style-comp1.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class StyleComp1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

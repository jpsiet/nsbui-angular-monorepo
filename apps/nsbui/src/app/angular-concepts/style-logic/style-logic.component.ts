import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-style-logic',
  templateUrl: './style-logic.component.html',
  styleUrls: ['./style-logic.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class StyleLogicComponent implements OnInit {
  constructor() {}
  theme = false;

  ngOnInit(): void {}
  handleTheme() {
     this.theme = !this.theme
  }

}

import { AfterViewInit, Component, ContentChild, OnInit } from '@angular/core';

import {  OptionalComponent, OPTIONAL_TOKEN } from '../optional/optional.component';

@Component({
  selector: 'app-edit-mode',
  templateUrl: './edit-mode.component.html',
  styleUrls: ['./edit-mode.component.scss']
})
export class EditModeComponent implements OnInit, AfterViewInit {
  @ContentChild(OPTIONAL_TOKEN) optionalCmp:OptionalComponent|null = null;

  constructor() { }

  ngAfterViewInit(): void {
   console.log(this.optionalCmp);
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-comp',
  templateUrl: './advanced-comp.component.html',
  styleUrls: ['./advanced-comp.component.scss'],
})
export class AdvancedCompComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  handledToggled(toogled:boolean){

    console.log(toogled);

  }
}

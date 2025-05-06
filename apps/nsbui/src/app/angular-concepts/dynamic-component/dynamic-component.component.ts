import { Component, OnInit } from '@angular/core';
import { CashoverrideService } from './cashoverride.service';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnInit {

  constructor(private cashOverrideService:CashoverrideService) { }
  statesData :any;
  districts:any = [];
  selectedStates!: string;
  selectedState = '';

  ngOnInit(): void {
    this.statesData = this.cashOverrideService.data;
  }
  handleChange(data:any){

    this.selectedStates = data.target.value;
    const state = this.statesData.filter((item:any) => item.value === this.selectedStates);
     this.districts  = state[0]['district'];

  }

}

import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, } from '@angular/forms';
@Component({
  selector: 'app-cashoverride',
  templateUrl: './cashoverride.component.html',
  styleUrls: ['./cashoverride.component.scss'],

})
export class CashoverrideComponent implements OnInit, ControlValueAccessor {
  @Input()
  statesData: any;
  @Input() removable: boolean = false;
  selectedStates: any;
  districts: any;
  index!: number;
  state!: string;
  @Output() remove = new EventEmitter<number>();
  @Output() stateSelection = new EventEmitter<string>();
  value: any;


  handleClickEvent() {
    this.remove.emit(this.index);
  }

  constructor() {}
  writeValue(obj: any): void {
    this.value = obj;
    this.state = this.value.state;
    console.log("write value")
   }

  onChange = (value: any) => {};
  public onTouch = (): void => {};

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  ngOnInit(): void {
    this.districts = [];
    console.log("calling cash override component")
  }

  handleChange(event: any) {
    this.districts = this.findDistrict(event.target.value);
    this.stateSelection.emit(event.target.value);
    //event.preventDefault();
  }

  findDistrict(selectedState: any) {
    const state = this.statesData.filter(
      (item: any) => item.value === selectedState
    );
    return state[0]['district'];
  }
}

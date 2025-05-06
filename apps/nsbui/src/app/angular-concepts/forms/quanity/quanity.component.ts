import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-quanity',
  templateUrl: './quanity.component.html',
  styleUrls: ['./quanity.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: QuanityComponent
    },
    {
      provide: NG_VALIDATORS,
      multi:true,
      useExisting: QuanityComponent
    }
  ]
})
export class QuanityComponent implements OnInit, ControlValueAccessor, Validator {
  quantity=1;
  onChnage = (abc:number) => {};
  onTouched = () => {};

  touched = false;

  disabled = false;
  constructor() { }
  writeValue(val: number): void {
    this.quantity =val;
  }
  registerOnChange(fn: any): void {
    this.onChnage = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(disabled: boolean): void {
    this.disabled = disabled;
  }

  decrease(){
   this.quantity -=1;
   this.onChnage(this.quantity);
  }
  increase(){
    this.quantity +=1;
    this.onChnage(this.quantity);
  }
  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
  validate(control: AbstractControl): any | null {

    const quantity = control.value;
    if (quantity <= 0) {
      return {
        mustBePositive: {
          quantity
        }
      };
    }
  }
  ngOnInit(): void {
  }

}

import {
  Component,
  OnInit,

} from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';


@Component({
  selector: 'app-basic-input',
  template: `
    <div>Custom Input</div>
    <input [value]="value"  (change)="handleChnage($event)"/>
  `,
  styleUrls: ['./cashoverride.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: BasicComponent
    },
    {
      provide: NG_VALIDATORS,
      multi:true,
      useExisting: BasicComponent
    }
  ]
})
export class BasicComponent implements OnInit, ControlValueAccessor,Validators {
  value: any = "Test";
  touched = false;

  constructor() {}
  writeValue(obj: any): void {
    this.value = obj;
  }

  onChange = (value:any) => {};
  public onTouch = (): void => {};

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
  handleChnage(event:any){
    console.log(event.target.value);
    this.value = event.target.value;

    this.touched = true;
    this.onChange(this.value);

    this.onTouch();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const quantity = Number(control.value);


    if (quantity <20) {
      return {
        mustBePositive: {
          quantity,
        }
      };
    }
    return null;
  }

  ngOnInit(): void {}
}

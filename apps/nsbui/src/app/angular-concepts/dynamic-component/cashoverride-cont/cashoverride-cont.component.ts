import {
  AfterContentInit,
  AfterViewInit,
  Component,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  Form,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { CashoverrideService } from '../cashoverride.service';
import { CashoverrideComponent } from '../cashoverride/cashoverride.component';

@Component({
  selector: 'app-cashoverride-cont',
  templateUrl: './cashoverride-cont.component.html',
  styleUrls: ['./cashoverride-cont.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CashoverrideContComponent), // replace name as appropriate
      multi: true,
    },
  ],
})
export class CashoverrideContComponent
  implements OnInit, AfterContentInit, ControlValueAccessor, OnDestroy
{
  @ViewChild('container', { read: ViewContainerRef, static: true })
  vc!: ViewContainerRef;
  statesData: any;
  value!: [];

  subscriptions: Subscription[] = [];

  constructor(private cashOverrideService: CashoverrideService) {
    this.statesData = this.cashOverrideService.data;
  }



  writeValue(obj: any): void {
    this.value = obj;
    console.log('write value');
  }

  onChange = (value: any) => {};
  public onTouch = (): void => {};

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  dynamicCompRef: CashoverrideComponent[] = [];
  stateSelectionMap = new Map<string, string>();

  ngOnInit(): void {}

  ngAfterContentInit (): void {
    this.addCashOverride(false);
  }

  addCashOverride(removable: boolean = true) {
    const contRef = this.vc.createComponent(CashoverrideComponent);
    const cashOverrideComponent: CashoverrideComponent = contRef.instance;
    cashOverrideComponent.statesData = this.statesData;
    cashOverrideComponent.removable = removable;
    cashOverrideComponent.index = this.dynamicCompRef.length;
    cashOverrideComponent.remove.subscribe((index) => {
      console.log('removing index ' + index);
      this.removeComponent(index);
    });
    cashOverrideComponent.stateSelection.subscribe((state) => {
      this.validateState(state);
    });
    this.dynamicCompRef.push(cashOverrideComponent);
  }

  validateState(state: string) {
    if (this.stateSelectionMap.get(state)) {
      alert('duplcate state, Please select another one');
    } else {
      this.stateSelectionMap.set(state, state);
    }
  }

  removeComponent(index: number) {
    this.vc.remove(index);
    for (let i = index + 1; i < this.dynamicCompRef.length; i++) {
      this.dynamicCompRef[i].index = this.dynamicCompRef[i].index - 1;
    }
    this.dynamicCompRef.splice(index, 1);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) =>
      (sub || { unsubscribe() {} }).unsubscribe()
    );
  }
}

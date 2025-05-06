import {
  Component,
  ContentChild,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { InputRefdirDirective } from '../input-refdir.directive';

@Component({
  selector: 'app-fa-final-input',
  templateUrl: './fa-final-input.component.html',
  styleUrls: ['./fa-final-input.component.scss'],
  encapsulation:ViewEncapsulation.None
})
// perfect
//https://blog.angular-university.io/angular-ng-content/
export class FaInputFinalComponent implements OnInit {
  @Input()
  icon!: any;

  constructor() {}
  @ContentChild(InputRefdirDirective)
  input!: InputRefdirDirective;

  @HostBinding('class.focus')
  get focus(){
    return this.input? this.input.focus:false;
  }

  ngOnInit(): void {}

}

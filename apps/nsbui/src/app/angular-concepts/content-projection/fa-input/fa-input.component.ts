import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';


@Component({
  selector: 'app-fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.scss'],
})
// problem with this type component restricition of  input type component
//https://blog.angular-university.io/angular-ng-content/
export class FaInputComponent implements OnInit {
  @Input()
  icon!: any;
  @Output() value = new EventEmitter<string>();
  inputFocus = false;

  constructor() {}

  ngOnInit(): void {}

  @HostBinding('class.focus')
  get focus() {
    return this.inputFocus;
  }
}

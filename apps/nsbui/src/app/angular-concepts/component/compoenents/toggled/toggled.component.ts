import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'toggled',
  templateUrl: './toggled.component.html',
  styleUrls: ['./toggled.component.scss']
})
export class ToggledComponent implements OnInit {

  constructor() { }
  @Input() on = true;
  @Output() toggled:EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
  }
  changeToggleButton(){
    this.on = !this.on;
    this.toggled.emit(this.on);
  }

}

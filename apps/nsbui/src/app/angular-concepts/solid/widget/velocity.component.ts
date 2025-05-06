import { Component, OnInit } from '@angular/core';
import { reloadableIF, WidgetContentIF } from './widget-content.interface';

@Component({
  selector: 'app-velocity-content',
  template: `<h5>Velocity</h5>
    <section class="wether-widget">
      <div class="value">+45</div>
    </section> `,
  styles: [],
})
export class VelocityComponent implements OnInit, WidgetContentIF {
  constructor() {}
  id: string = '1';
  ngOnInit(): void {}
}

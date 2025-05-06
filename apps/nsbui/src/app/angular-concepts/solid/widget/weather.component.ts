import { Component, OnInit } from '@angular/core';
import { reloadableIF, WidgetContentIF } from './widget-content.interface';
import { RELOADABLE_CONTENT } from './widget-content.token';

@Component({
  selector: 'app-weather-content',
  template: `<h5>WeatherComponent</h5>
  <section class="velocity-widget">
    <div class="value">+25</div>
  </section> `,
  styles: [],
  providers:[{
    provide:RELOADABLE_CONTENT,useExisting:WeatherComponent
  }]

})
export class WeatherComponent implements OnInit , WidgetContentIF, reloadableIF
{
  constructor() {}
  loading: boolean = false;
  reload(): void {
    console.log('do some polling for Weather Component');
  }
  id: string = '1';
  ngOnInit(): void {}
}


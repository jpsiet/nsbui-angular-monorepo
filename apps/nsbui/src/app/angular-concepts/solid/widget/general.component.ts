import { Component, OnInit } from '@angular/core';
import { reloadableIF, WidgetContentIF } from './widget-content.interface';
import { RELOADABLE_CONTENT } from './widget-content.token';

@Component({
  selector: 'app-general-content',
  template: `<h5>General Component</h5>
    <section class="velocity-widget">
      <div class="value">+29</div>
    </section> `,
  styles: [],
  providers: [
    {
      provide: RELOADABLE_CONTENT,
      useExisting: GeneralComponent,
    },
  ],
})
export class GeneralComponent implements OnInit, WidgetContentIF, reloadableIF {
  constructor() {}
  loading: boolean = false;
  reload(): void {
    console.log('do some polling for General Component');
  }
  id: string = '1';
  ngOnInit(): void {}
}

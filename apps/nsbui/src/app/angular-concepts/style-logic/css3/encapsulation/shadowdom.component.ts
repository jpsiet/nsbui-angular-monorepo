import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-dom-encapsulation',
  template: `
    <h2>ShadowDom</h2>
    <h3>Button</h3>
    <div class="shadow-message">Shadow DOM encapsulation</div>
    <p class="emulated-p">Hello Emulated Paragraph</p>
    <p class="none-p">Hello NONE Paragraph</p>
    <!-- <app-emulated-encapsulation></app-emulated-encapsulation>
    <app-no-encapsulation></app-no-encapsulation> -->
  `,
  styles: [
    'h2, .shadow-message { color: blue; font-size: 15px  }',
    '.none-p{font-size: 40px; color: blue }',
    'h3{ font-size: 30px; color: blue}',
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowDomEncapsulationComponent {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

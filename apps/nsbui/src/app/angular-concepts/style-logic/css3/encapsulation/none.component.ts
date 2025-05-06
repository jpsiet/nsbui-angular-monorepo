import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-no-encapsulation',
  template: `
    <h2>None</h2>
    <h3>Button</h3>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-primary">Primary</button>
    <div class="none-message">No encapsulation</div>
  `,
  styles: [
    'h2, .none-message { color: green; font-size: 20px }',
    '.none-p{font-size: 25px; color: green }',
    'h3{ font-size: 30px; color: green}',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NoEncapsulationComponent {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emulated-encapsulation',
  template: `
    <h2>Emulated</h2>
    <h3>Button</h3>
    <div class="emulated-message">Emulated encapsulation</div>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-primary">Primary</button>
    <!-- <app-no-encapsulation></app-no-encapsulation>
    <app-general></app-general> -->
    <!-- <app-shadow-dom-encapsulation></app-shadow-dom-encapsulation>
    <p>emulatedd shadown dom end</p> -->
    `,
  styles: [
    'h2, .emulated-message { color: red; font-size: 10px}',
    '.emulated-p{font-size: 25px; color: red }',
    '.none-p{font-size: 35px; color: red }',
    'h3{font-size: 20px }',
  ],
  encapsulation: ViewEncapsulation.Emulated,
})
export  class  EmulatedEncapsulationComponent {}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

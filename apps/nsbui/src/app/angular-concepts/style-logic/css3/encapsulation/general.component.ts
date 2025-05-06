import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  template: `
    <div>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-primary">Primary</button>
    </div>
    <div class="none-message">Genearl encapsulation</div>
  `,
  styles: ['h2, .emulated-message { color: orange; }'],
})
export class GeneralComponentCSS implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

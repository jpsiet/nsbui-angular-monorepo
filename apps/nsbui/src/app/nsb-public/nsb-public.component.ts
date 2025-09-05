import { Component } from '@angular/core';
import { MeasureGridComponent } from './component/measure-grid/measure-grid.component';




@Component({
  selector: 'app-nsb-public-component',
  imports: [MeasureGridComponent],
  templateUrl: './nsb-public.component.html',
  styleUrls: ['./nsb-public.component.scss'],

})
export class NsbPublicComponent  {

  title = 'nsb-school-ui';
 }

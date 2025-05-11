import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';




@Component({
  selector: 'app-concept-grid-comp',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  standalone  : true,
  imports: [AgGridModule, RouterOutlet]
})
export class AgGridContComponent  {

}

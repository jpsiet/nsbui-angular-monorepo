import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SimpleAgChartComponent } from './simple-chart/app-chart-simple';

import { AgChartsAngularModule } from 'ag-charts-angular';

const routes: Routes = [
  {
    path: '',
    component: SimpleAgChartComponent,
    children: [],
  },

];

@NgModule({
  declarations: [SimpleAgChartComponent],
  imports: [CommonModule, RouterModule.forChild(routes),
    AgChartsAngularModule
    ],
  providers: [],
})
export class AGChartConceptModule {}

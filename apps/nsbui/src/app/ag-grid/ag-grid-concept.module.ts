import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';


import { BasicGridComponent } from './basic-grid/basic-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { ResponsiveAgGridComponent } from './responsive-grid/responsive-grid.component';
import { PivotAgGridComponent } from './pivot-grid/pivot-grid.component';
import { AgGridContComponent } from './grid-content/grid.component';
import { EnterpriseGridComponent } from './enterprise-grid/enterprise-grid.component';
import { orientationGridComponent } from './orientation-grid/orientation-grid.component';
import {  StudentMarkSummarySTGGridComponent } from './student-mark-summary-stg-grid/student-mark-summary-stg-grid.component';
import { StudentMarkSummaryETHGridComponent } from './student-mark-summary-eth-grid/student-mark-summary-eth-grid.component';



const routes: Routes = [
  {
    path: '',
    component : AgGridContComponent,
    children: [
      {
        path: 'responsive-grid',
        component: ResponsiveAgGridComponent,
        children: [],
      },
      {
        path: 'basic-grid',
        component: BasicGridComponent,
        children: [],
      },
      {
        path: 'enterprise-grid',
        component: EnterpriseGridComponent,
        children: [],
      },
      {
        path: 'pivot-grid',
        component: PivotAgGridComponent,
        children: [],
      },
       {
        path: 'orient-grid',
        component: orientationGridComponent,
        children: [],
      },
      {
        path: 'student-summary-stg-grid',
        component: StudentMarkSummarySTGGridComponent,
             children: [],
      },
      {
        path: 'student-summary-eth-grid',
        component: StudentMarkSummaryETHGridComponent,
             children: [],
      }

    ],
  },

];

@NgModule({
  declarations: [ResponsiveAgGridComponent],
  imports: [CommonModule, RouterModule.forChild(routes),
    AgGridModule,
    PivotAgGridComponent
    ],
  providers: [],
})
export class AGGridConceptModule {}

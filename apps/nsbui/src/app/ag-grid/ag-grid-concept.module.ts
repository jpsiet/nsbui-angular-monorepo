import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';


import { SimpleAgGridComponent } from './simple-grid/simple-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { ResponsiveAgGridComponent } from './responsive-grid/responsive-grid.component';



const routes: Routes = [
  {
    path: '',
    component: SimpleAgGridComponent,
    children: [],
  },
  {
    path: 'responsive-grid',
    component: ResponsiveAgGridComponent,
    children: [],
  },
  {
    path: 'enterprise-grid',
    component: ResponsiveAgGridComponent,
    children: [],
  },
];

@NgModule({
  declarations: [SimpleAgGridComponent,ResponsiveAgGridComponent],
  imports: [CommonModule, RouterModule.forChild(routes),
    AgGridModule
    ],
  providers: [],
})
export class AGGridConceptModule {}

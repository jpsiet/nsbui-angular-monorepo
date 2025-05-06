import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';
import { RoutingPocRoutingModule } from './routing-poc-rotuing.module';
import { RoutingComponent } from './routing.component';
import { RoutingHomeComponent } from './routing-home/routing-home.component';

@NgModule({
  declarations: [
    RoutingComponent,
    RoutingHomeComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    RoutingPocRoutingModule

  ]
})
export class RoutingPocModule { }

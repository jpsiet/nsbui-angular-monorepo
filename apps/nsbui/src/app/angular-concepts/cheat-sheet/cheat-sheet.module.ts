import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheatSheetComponent } from './cheat-sheet.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { CheatSheetChild1Component } from './cheat-sheet-child1/cheat-sheet-child1.component';
import { CheatSheetChild2Component } from './cheat-sheet-child2/cheat-sheet-child2.component';

const route:Routes = [{
  path:'',
  component:CheatSheetComponent
}]

@NgModule({
  declarations: [
    CheatSheetComponent,
    CheatSheetChild1Component,
    CheatSheetChild2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class CheatSheetModule { }

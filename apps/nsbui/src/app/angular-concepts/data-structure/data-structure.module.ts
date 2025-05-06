import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DataStructureComponent } from './data-structure.component';


const routes: Routes = [
  {
    path: '',
    component: DataStructureComponent,
    children: [],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DataStructureModule { }

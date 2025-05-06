import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';



import { AgGridModule } from 'ag-grid-angular';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StudentsComponent } from './component/students/students.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddStudentsComponent } from './component/add-students/add-students.component';
import { StudentGridComponent } from './component/student-grid/student-grid.component';



const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: [],
  },
 
];

@NgModule({
  declarations: [StudentsComponent,AddStudentsComponent,StudentGridComponent],
  imports: [CommonModule, RouterModule.forChild(routes),
    AgGridModule,
    FormsModule,
     BrowserModule,
     ReactiveFormsModule,
        HttpClientModule,
        
    ],
  providers: [],
})
export class NSBPublicModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // <-- Remove RouterOutlet here

import { AgGridModule } from 'ag-grid-angular';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StudentsComponent } from './component/students/students.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddStudentsComponent } from './component/add-students/add-students.component';
import { StudentGridComponent } from './component/student-grid/student-grid.component';
import { combineLatest } from 'rxjs';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { StudentService } from './services/student.service';
import { NsbPublicComponent } from './nsb-public.component';
import { TeachersContComponent } from './teachers-cont.component';
import { TeacherTabsComponent } from './teachers/teacher-tabs.component';
import { TeacherService } from './services/teacher-service';
import {  MarkTranposeGridComponent } from './component/marks-grid/mark-tranpose-grid.component';

import 'ag-grid-enterprise';
import { MeasureGridComponent } from './component/measure-grid/measure-grid.component';

const routes: Routes = [
  {
    path: '',
    component: NsbPublicComponent,
    children: [{
      path: 'students',
      component: StudentsComponent,
    },
  {
      path: 'teachers',
      component: TeachersContComponent,
    }],
  },

];

@NgModule({
  declarations: [StudentsComponent, NsbPublicComponent,
    AddStudentsComponent, StudentGridComponent,
     MarkTranposeGridComponent,MeasureGridComponent,
    TeachersContComponent,
    TeacherTabsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgGridModule,
    FormsModule,
    MatDialogModule,
MatTabsModule ,
    ReactiveFormsModule,
    HttpClientModule,
    // REMOVE RouterOutlet from here!
  ],
  providers: [TeacherService],
})
export class NSBPublicModule { }

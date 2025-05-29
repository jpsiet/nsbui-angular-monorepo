import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddStudentsComponent } from '../add-students/add-students.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

import { StudentService } from '../../services/student.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent  {
  constructor(
    public dialog: MatDialog,
    private studentService: StudentService
  ) {}
  updateGrid = false;

  students: any;


  handleAddStudents() {
    // const dialogRef = this.studentService.openStudentDialog({},AddStudentsComponent);
    // (dialogRef.componentInstance as any).done.subscribe((data:any) => {
    //   this.updateGrid = true;
    //   dialogRef.close();
    // });
    // dialogRef.afterClosed().subscribe(() => {
    //   this.updateGrid = false;
    // });
  }
}

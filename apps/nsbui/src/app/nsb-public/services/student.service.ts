import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Student } from 'apps/nsbui/src/generated/model/student';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl = 'http://localhost:8080/';



  constructor(private http: HttpClient) { }

  openStudentDialog(data:any=null,dailogComponent:any){
    // return  this.dialog.open(dailogComponent, {
    //   data: data,
    // });

  }

  getStudentList():Observable<Array<Student>>{
    const url = this.baseUrl+ 'students' ;
    return this.http.get<Array<Student>>(url);
  }

  deleteStudentsByID( id:number){
    const url = this.baseUrl+ 'delete-student-id?id=' + id;
    return this.http.get(url);
  }

  addStudent(student:{name:string}){
    const url = this.baseUrl+ 'add-student' ;
    return this.http.post(url,student);
  }
}

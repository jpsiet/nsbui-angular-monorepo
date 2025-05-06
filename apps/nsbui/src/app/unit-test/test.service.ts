import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Student } from 'src/generated/model/student';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  baseUrl = 'http://localhost:8080/';



  constructor(private http: HttpClient) { }


  getStudentList():Observable<Array<Student>>{
    const url = this.baseUrl+ 'students' ;
    return this.http.get<Array<Student>>(url);
  }

  doWork(){

  }
}

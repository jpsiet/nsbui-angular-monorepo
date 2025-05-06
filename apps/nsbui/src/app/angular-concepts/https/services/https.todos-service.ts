import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, ToDo } from '../../interfaces/person';



@Injectable({
  providedIn: 'root'
})
export class HttpsToDoService {

  constructor(private http: HttpClient) { }

  getToDOService(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getToDOServiceById(id:number): Observable<ToDo> {
    return this.http.get<ToDo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  getUsersService(): Observable<Person> {
    return this.http.get<Person>('https://jsonplaceholder.typicode.com/users');
  }

  getUsersByServiceId(id:number): Observable<Person> {
    console.log(" calling service call for id", id)
    return this.http.get<Person>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  getTCourse(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/course');
  }
}

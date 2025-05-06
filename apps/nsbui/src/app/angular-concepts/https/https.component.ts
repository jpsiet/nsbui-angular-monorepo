import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Person } from '../interfaces/person';
import { HttpsToDoService } from './services/https.todos-service';

@Component({
  selector: 'app-https',
  templateUrl: './https.component.html',
  styleUrls: ['./https.component.scss']
})
export class HttpsComponent implements OnInit {
  todosByID$ = new Observable<any>();
  todos$:Observable<Person[]> = new Observable<Person[]>();

  constructor(private httpsToDoService:HttpsToDoService) { };


  ngOnInit(): void {
    this.todosByID$ = this.httpsToDoService.getToDOByIdService();
    this.todos$ = this.httpsToDoService.getToDOService();
       this.httpsToDoService.getTCourse().subscribe( val => {
        console.log("success for local calling without proxy")
        console.log(val)
       },err =>{
        console.log(err);
       })
  }

}

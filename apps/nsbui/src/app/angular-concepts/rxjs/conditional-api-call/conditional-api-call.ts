import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { Observable, of, Subject, switchMap, tap } from 'rxjs';
import { SearchService } from '../operators/search-service';
import { TodosService } from 'src/app/common/services/task-service';
import { HttpsToDoService } from '../../https/services/https.todos-service';
import { Person, ToDo } from '../../interfaces/person';

 export interface configForm{
  cityName:string;
  templateName:string;
  id:number;

 }


@Component({
  selector: 'conditional-api-call',
  templateUrl: './conditional-api-call.html',
  styleUrls: ['./conditional-api-call.scss'],
})
export class ConditionalApiCall implements OnInit {

  id: string = '';
  prevFormData!: configForm;
 userInfo!: Person;
  fullServiceCall: boolean = false;
  constructor(private  service:HttpsToDoService, public fb: FormBuilder){
  }

  ngOnInit(): void {
  }

  isSubmitted = false;

  // City Names
  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];
  Template: any = ['Default', 'Target', 'GIS', 'Canada'];
 
  registrationForm = this.fb.group({
    cityName: ['', [Validators.required]],
    templateName:['', [Validators.required]],
    id:[0, [Validators.required]],
  })


  /*########### Template Driven Form ###########*/
  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      this.handlePersonDetailsData(this.registrationForm.value as configForm);
      }
   
    return true;

  }

// if  only template field changes then no personal service call only todo service call ... other 
// wise all the service call
  handlePersonDetailsData( val:configForm){
  const mock = !this.checkIfServiceCallRequired(val);
  this.fullServiceCall = mock;
    this.prevFormData = val;
   this.getUserServiceCallCond(Number(val.id),mock).pipe(
       tap((user:Person) => {
        console.log(" user details", user);
        this.userInfo = user;
       }),
      switchMap(val => this.service.getToDOServiceById(Number(val.id)??0))
    ).subscribe( (todo: ToDo) =>{
     
      console.log("todos", todo);
   })


  }

  getUserServiceCallCond(id:number,mock = true):Observable<Person>{
    return  mock ? of(this.userInfo): this.service.getUsersByServiceId(Number(id));
  }

  checkIfServiceCallRequired(newval: configForm) {
   if(!this.prevFormData)
    return true;
    if(  newval.cityName !== this.prevFormData.cityName || newval.id !== this.prevFormData.id ){
    console.warn(" there is config changes for service call");
    return true;
    }
     else{
      console.warn(" there is onmy template changes so no  user  service call");
     }
    return false;
  }

}

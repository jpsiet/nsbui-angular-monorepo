import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { french, spanish } from './actions/simple.action';


interface Appstate{
  message:string
}
@Component({
  selector: 'app-redux-sample',
  templateUrl: './redux-sample.component.html',
  styleUrls: ['./redux-sample.component.scss']
})


export class ReduxSampleComponent implements OnInit {

  message$:Observable<string>;
  constructor( private store:Store<{ message:string}>) {
    this.message$ = this.store.select('message')
   }

  ngOnInit(): void {
  }

  spanishMessage(){
    this.store.dispatch(spanish())
  }

  frenchMessage(){
    this.store.dispatch(french())
  }

  resetMessage(){
    this.store.dispatch(french())
  }

}

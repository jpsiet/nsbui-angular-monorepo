import {  ActionCreator, createReducer, on } from '@ngrx/store';
import { french, reset, spanish } from '../actions/simple.action';

export const message = "Hello Word";

const _counterReducer = createReducer(
  message,
  on(spanish, (state) => "Hello Word SPanish"),
  on(french, (state) => "Hello World French"),
  on(reset, (state) => "Hello Word")
);

export  function simpleReducer(state:any, action:any) {
  return _counterReducer(state, action);
}

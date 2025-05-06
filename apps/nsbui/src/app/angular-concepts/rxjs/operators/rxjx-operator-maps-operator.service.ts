import { Injectable } from '@angular/core';
import { from, interval, Observable, of } from 'rxjs';
import { concatMap, delay, exhaustMap, mergeMap, switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RxjxOperatorMapsOperatorService {
  //switchMap, mergeMap, concatMap and exhaustMap are rxjs flattening operatators.
  // They are considered as transformational operators since they transform an observable after
  //applying a function, to a new observable.
  // They help us to avoid situation where we have to nest subscription and things get messy
  //For example, when a user clicks a submit button (source observable), an http request is sent to the server
  //(inner observable), then, we listen to the response.
  //The difference between them is based on the manner in which they act when the source observable emits while
  // the inner subscription still in progress.
  //Imagine this user clicks the submit button, an http request is sent to the server, while we are waiting for
  // a response he clicks again on the button.
  //What should inner observable do?🤔
  //cancels active subscription and starts new one?
  //maintains active subscription and ignores new one?
  //maintains active subscription and starts new one?
  //To anwser these questions and more, we will make things simpler.
  //We will imagine the source observable as client orders in restaurant, and, inner observable as a chef response to
  // these orders.
  //orders are observable of strings representing different client orders. 👨
  //prepareOrder will be the projection function, it takes an order as observable. After preparing the order
  //(it takes random time ⏲️ ) it sends back a new observable (inner observable)

   // emits order from immediately
  //orders = from(["order1", "order2", "order3", "order4"]);
  // this will emit in re
  orders = interval(1000).pipe(take(10));
  constructor() {

    // How flattening operators would represent themselves if they were chefs?
    //-🤯mergeMap: I'm a hard worker, I can prepare multiple orders at the same time ! But I don't respect orders sequence.
    //-😇concatMap: I respect orders sequence! You will get your order as soon as I finish what I'm currently doing.
    //-🙄exhaustMap: I'm exhausted ! when I prepare an order, I won't listen to any other order.
    //-😈switchMap: I'm mean ! your order will be in trash if I receive new one.
  }
  preaprerOrder(order: string|number) {

    const delayTime = Math.floor(Math.random() * 2000) + 1;
    return of(` i' am  ${order} I am ready after ${delayTime} ms`).pipe(delay(delayTime))
  }

  mergeMapOperator() {

    // We get order 2, 3, 4, then 1.
    // It seems like mergeMap does not respect orders sequence !.
    // let's see what happens with this chef:
    // While he is preparing an order, he is also listening for new orders, when he gets one,
    // he starts immediately treating the new order even the current one is not yet completed,
    //then, he sends back the first that gets completed and so on.
    // He treats orders concurrently !
    return this.orders.pipe(
      mergeMap(order => this.preaprerOrder(order))
    )
  }


  concatMapOperator() {

    //We get orders in sequence 1, 2, 3, then 4.
    //Wow this chef respect orders sequence !
    //Even though order 4 took only 12 ms to be ready and order 1 took 685 ms, he responded to order 1
    //before order 4 !
    // What happens?
    //This chef listen to orders in sequence. While he is in the middle of preparing an order and
    //new one comes, he takes note of this order (in buffer) to get back to it after finishing
    //current order and so on.
    return this.orders.pipe(
      concatMap(order => this.preaprerOrder(order))
    )
  }


  exhaustMapOperator() {

    //This chef is so lazy, he responded only to the first order !
    //When he is preparing an order, he will ignore any order in meantime until he finishes the
    //current one.
    // so when we switch order to interval ( coming over time not immediate), then it will take first
    // and finish that then it will be ready for nay new order.. in between order will be vanished
    // means not be remmber  out of order will be

    return this.orders.pipe(
      exhaustMap(order => this.preaprerOrder(order))
    )
  }


  switchMapOperator() {

    //He responded only to order 4 !
    //This chef is unkind ! When he is preparing an order and gets new one, he drops
    // the current order and starts immediately preparing the new order.
    // so when we switch order to interval ( coming over time not immediate), then it will take first
    // and  while finishing any new order came then he will put older order in trash and jump on new
    //one order and jump into next one
    // difference between exhaust map and switch map is that.. when they preparing order
    // exhaust map will not listen to any thing.. just let other order  go by pass untill first one finish
    // switch map will listen to other's order and trash to old one and start work on new one and so on
    return this.orders.pipe(
      switchMap(order => this.preaprerOrder(order))
    )
  }

}

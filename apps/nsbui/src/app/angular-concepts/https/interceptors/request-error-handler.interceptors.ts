import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestErrorHandlerIntercptors implements HttpInterceptor {

  intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{

    console.log("%cprocessing  Error handler request =>" + request, "color:red");
    return next.handle(request);

  }

}

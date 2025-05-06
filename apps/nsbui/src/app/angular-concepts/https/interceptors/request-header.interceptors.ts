import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RequestHeaderIntercptors implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('%cprocessing Header request =>' + request, 'color:green');
    const customRequest = request.clone({
      headers: request.headers.set('name', 'jitendra'),
    });
    return next.handle(customRequest).pipe(
      tap((ev: HttpEvent<any>) => {
        if (ev instanceof HttpResponse) {
          console.log('processing response', ev);
        }
      }),
      catchError((response: any) => {
        if (response instanceof HttpErrorResponse) {
          console.log(' http Error in request');
        }
        return throwError(response);
      })
    );
  }
}

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoveNewListInterceptor implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.body && request.body.issue){
      request = request.clone({
        body: request.body.issue,
      })
    }

    if(request.body && request.body.newList){
      request = request.clone({
        body: request.body.newList
      })
    }

    return next.handle(request);
  }
}

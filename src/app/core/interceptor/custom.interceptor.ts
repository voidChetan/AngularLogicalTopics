import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if(request.url != 'https://jsonplaceholder.typicode.com/users')
    {
      const token =  'bearer ' + localStorage.getItem('token');
      request = request.clone({ headers: request.headers.set('Authorization', token) });
      request = request.clone({ headers: request.headers.set('KEY', "adsdasd") });
    }
    return next.handle(request);
  }
}

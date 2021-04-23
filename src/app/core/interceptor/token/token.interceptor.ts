import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { ConfigService } from '../../http/config/config.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private config: ConfigService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.config.getToken()}`
      }
    });

    console.log("Sending request with new header now ... INTERCEPTED");

    return next.handle(request);
  }

}
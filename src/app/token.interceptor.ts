import { Injectable } from '@angular/core';
import {retry,catchError} from 'rxjs/operators'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.method === 'POST') {

      const headers = req.headers
          .set('Content-Type', 'application/json');
      req = req.clone({ headers });
      console.log(req)
      return next.handle(req)
  } else
  console.log(req)
      return next.handle(req.clone())

  }
}

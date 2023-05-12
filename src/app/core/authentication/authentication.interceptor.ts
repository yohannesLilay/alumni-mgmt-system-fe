import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Http request options headers. */
const httpOptions: any = {
  headers: {},
};

/** Authorization header. */
const authorizationHeader = 'Authorization';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }

  setAuthorizationToken(authenticationKey: string) {
    httpOptions.headers[authorizationHeader] = `Bearer ${authenticationKey}`;
  }

  removeAuthorization() {
    delete httpOptions.headers[authorizationHeader];
  }
}

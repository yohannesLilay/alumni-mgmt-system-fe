import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Environment Configuration */
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!request.url.includes('http:') && !request.url.includes('https:')) {
      request = request.clone({ url: environment.serverUrl + request.url });
    }

    return next.handle(request);
  }
}

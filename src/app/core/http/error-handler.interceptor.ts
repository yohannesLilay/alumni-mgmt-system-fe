import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';

/** rxjs Imports */
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

/** Environment Configuration */
import { environment } from 'src/environments/environment';

/** Custom Services */
import { AlertService } from '../alert/alert.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private alertService: AlertService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next
      .handle(request)
      .pipe(catchError((error) => this.handleError(error)));
  }

  private handleError(response: HttpErrorResponse): Observable<HttpEvent<any>> {
    const status = response.status;
    let errorMessage = response.error.detail || response.message;

    if (status === 401) {
      this.alertService.alert({
        type: 'error',
        message: 'Invalid User Details. Please try again!',
      });
    } else if (
      status === 403 &&
      errorMessage === 'The provided one time token is invalid'
    ) {
      this.alertService.alert({
        type: 'error',
        message: 'Invalid Token. Please try again!',
      });
    } else if (status === 400) {
      this.alertService.alert({
        type: 'error',
        message: 'Invalid parameters were passed in the request!',
      });
    } else if (status === 403) {
      this.alertService.alert({
        type: 'error',
        message: errorMessage || 'You are not authorized for this request!',
      });
    } else if (status === 404) {
      this.alertService.alert({
        type: 'error',
        message: errorMessage || 'Resource does not exist!',
      });
    } else if (status === 500) {
      this.alertService.alert({
        type: 'error',
        message: 'Internal Server Error. Please try again later.',
      });
    } else {
      this.alertService.alert({
        type: 'error',
        message: 'Unknown Error. Please try again later.',
      });
    }

    throw response;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

/** rxjs Imports */
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

/** Custom Services */
import { AlertService } from '../alert/alert.service';

/** Custom Interceptors */
import { AuthenticationInterceptor } from './authentication.interceptor';

/** Environment Configuration */
import { environment } from '../../../environments/environment';

/** Custom Models */
import { LoginContext } from './login-context.model';
import { Credential } from './credential.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private rememberMe: boolean;
  private storage: any;
  private credential: Credential | undefined;
  private credentialStorageKey = 'userCredential';

  constructor(
    private http: HttpClient,
    private alertService: AlertService,
    private authenticationInterceptor: AuthenticationInterceptor
  ) {
    this.rememberMe = false;
    this.storage = sessionStorage;

    const savedCredential = JSON.parse(
      (sessionStorage.getItem(this.credentialStorageKey) as string) ||
        (localStorage.getItem(this.credentialStorageKey) as string)
    );
    if (savedCredential) {
      if (savedCredential.rememberMe) {
        this.rememberMe = true;
        this.storage = localStorage;
      }
    }
  }

  login(loginContext: LoginContext) {
    this.alertService.alert({
      type: 'Authentication Start',
      message: 'Please wait...',
    });
    this.rememberMe = loginContext.remember;
    this.storage = this.rememberMe ? localStorage : sessionStorage;

    return this.http
      .post('/authentication', {
        email: loginContext.email,
        password: loginContext.password,
      })
      .pipe(
        map((credential: any) => {
          this.onLoginSuccess(credential);
          return of(true);
        })
      );
  }

  private onLoginSuccess(credential: Credential) {
    this.authenticationInterceptor.setAuthorizationToken(
      credential.accessToken
    );

    this.setCredential(credential);
    this.alertService.alert({
      type: 'Authentication Success',
      message: `${credential.email} successfully logged in!`,
    });
    delete this.credential;
  }

  logout(): Observable<boolean> {
    this.authenticationInterceptor.removeAuthorization();
    this.setCredential();
    return of(true);
  }

  isAuthenticated(): boolean {
    return !!JSON.parse(
      (sessionStorage.getItem(this.credentialStorageKey) as string) ||
        (localStorage.getItem(this.credentialStorageKey) as string)
    );
  }

  getCredential(): Credential | null {
    return JSON.parse(this.storage.getItem(this.credentialStorageKey));
  }

  private setCredential(credential?: Credential) {
    if (credential) {
      credential.rememberMe = this.rememberMe;
      this.storage.setItem(
        this.credentialStorageKey,
        JSON.stringify(credential)
      );
    } else {
      this.storage.removeItem(this.credentialStorageKey);
    }
  }
}

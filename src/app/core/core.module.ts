import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

/** Custom Components */
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

/** Custom Modules */
import { SharedModule } from '../shared/shared.module';

/** Custom Services */
import { ProgressBarService } from './progress-bar/progress-bar.service';
import { AuthenticationService } from './authentication/authentication.service';

/** Custom Guards */
import { AuthenticationGuard } from './authentication/authentication.guard';

/** Custom Interceptors */
import { ProgressInterceptor } from './progress-bar/progress.interceptor';
import { ApiPrefixInterceptor } from './http/api-prefix.interceptor';
import { ErrorHandlerInterceptor } from './http/error-handler.interceptor';
import { AuthenticationInterceptor } from './authentication/authentication.interceptor';

/** Custom Strategies */
import { RouteReusableStrategy } from './route/route-reusable-strategy';

@NgModule({
  declarations: [ProgressBarComponent],
  imports: [SharedModule],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    AuthenticationInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
    ProgressBarService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProgressInterceptor,
      multi: true,
    },
    ApiPrefixInterceptor,
    ErrorHandlerInterceptor,
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        `${parentModule} has already been loaded. Import Core module in the AppModule only.`
      );
    }
  }
}

import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

/** Custom Components */
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

/** Custom Modules */
import { SharedModule } from '../shared/shared.module';

/** Custom Services */
import { ProgressBarService } from './progress-bar/progress-bar.service';

/** Custom Interceptors */
import { ProgressInterceptor } from './progress-bar/progress.interceptor';
import { ApiPrefixInterceptor } from './http/api-prefix.interceptor';
import { ErrorHandlerInterceptor } from './http/error-handler.interceptor';

@NgModule({
  declarations: [ProgressBarComponent],
  imports: [SharedModule],
  providers: [
    ProgressBarService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProgressInterceptor,
      multi: true,
    },
    ApiPrefixInterceptor,
    ErrorHandlerInterceptor,
  ],
})
export class CoreModule {}

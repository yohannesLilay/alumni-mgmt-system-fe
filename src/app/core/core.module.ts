import { NgModule } from '@angular/core';

/** Custom Components */
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

/** Custom Modules */
import { SharedModule } from '../shared/shared.module';

/** Custom Services */
import { ProgressBarService } from './progress-bar/progress-bar.service';

/** Custom Interceptors */
import { ProgressInterceptor } from './progress-bar/progress.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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
  ],
})
export class CoreModule {}

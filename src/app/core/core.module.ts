import { NgModule } from '@angular/core';

/** Custom Components */
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

/** Custom Modules */
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProgressBarComponent],
  imports: [SharedModule],
})
export class CoreModule {}

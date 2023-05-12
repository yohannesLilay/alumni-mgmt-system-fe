import { NgModule } from '@angular/core';

/** Custom Components */
import { InternalServerErrorComponent } from './errors/internal-server-error/internal-server-error.component';
import { PageNotFoundErrorComponent } from './errors/page-not-found-error/page-not-found-error.component';

/** Custom Modules */
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [InternalServerErrorComponent, PageNotFoundErrorComponent],
  imports: [SharedModule],
})
export class MainModule {}

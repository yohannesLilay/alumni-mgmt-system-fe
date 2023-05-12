import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/** Custom Components */
import { InternalServerErrorComponent } from './errors/internal-server-error/internal-server-error.component';
import { PageNotFoundErrorComponent } from './errors/page-not-found-error/page-not-found-error.component';
import { LayoutComponent } from './layout/layout.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './layout/content/content.component';

/** Custom Modules */
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    InternalServerErrorComponent,
    PageNotFoundErrorComponent,
    LayoutComponent,
    BreadcrumbComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
  ],
  imports: [SharedModule, RouterModule],
})
export class MainModule {}

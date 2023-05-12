import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Not Found Component
import { PageNotFoundErrorComponent } from './main/errors/page-not-found-error/page-not-found-error.component';

const routes: Routes = [
  {
    path: '**',
    component: PageNotFoundErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

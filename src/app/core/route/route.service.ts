import { Route as ngRoute, Routes } from '@angular/router';

/** Custom Guards */
import { AuthenticationGuard } from '../authentication/authentication.guard';

/** Custom Components */
import { LayoutComponent } from 'src/app/main/layout/layout.component';

export class RouteService {
  static withShell(routes: Routes): ngRoute {
    return {
      path: '',
      component: LayoutComponent,
      children: routes,
      canActivate: [AuthenticationGuard],
      data: { reuse: true },
    };
  }
}

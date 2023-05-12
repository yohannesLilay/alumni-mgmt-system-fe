import { Route as ngRoute, Routes } from '@angular/router';

/** Custom Guards */
import { AuthenticationGuard } from '../authentication/authentication.guard';

/** Custom Components */

export class RouteService {
  static withShell(routes: Routes): ngRoute {
    return {
      path: '',
      // component: ShellComponent,
      children: routes,
      canActivate: [AuthenticationGuard],
      data: { reuse: true },
    };
  }
}

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KeysComponent } from './keys/keys.component';
import { LogsComponent } from './logs/logs.component';
import { PermissionsComponent } from './permissions/permissions.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'keys',
      component: KeysComponent,
    },
    {
      path: 'logs',
      component: LogsComponent,
    },
    {
      path: 'permissions',
      component: PermissionsComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

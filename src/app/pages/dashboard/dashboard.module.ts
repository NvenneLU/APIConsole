import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { SystemctlComponent } from './systemctl/systemctl.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    DashboardComponent,
    SystemctlComponent,
  ],
})
export class DashboardModule { }

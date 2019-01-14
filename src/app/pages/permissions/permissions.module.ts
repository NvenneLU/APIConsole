import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PermissionsComponent } from './permissions.component';


@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    PermissionsComponent,

  ],
})
export class PermissionsModule { }

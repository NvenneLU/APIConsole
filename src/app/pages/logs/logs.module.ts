import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LogsComponent } from './logs.component';


@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    LogsComponent,

  ],
})
export class LogsModule { }

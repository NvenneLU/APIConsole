import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2CompleterModule } from "ng2-completer";
import { KeysComponent } from './keys.component';
import { ApiFormComponent } from './apiform/apiform.component';


@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    Ng2CompleterModule,
  ],
  declarations: [
    KeysComponent,
    ApiFormComponent,

  ],
})
export class KeysModule { }

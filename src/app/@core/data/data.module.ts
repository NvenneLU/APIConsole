import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './users.service';
import { StateService } from './state.service';
import { ApiService } from './api.service';

const SERVICES = [
  UserService,
  StateService,
  ApiService,
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}

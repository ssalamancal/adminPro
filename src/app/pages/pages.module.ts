import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    Graphics1Component,
    ProgressComponent
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    Graphics1Component,
    ProgressComponent
  ],
  providers: []
})
export class PagesModule {}

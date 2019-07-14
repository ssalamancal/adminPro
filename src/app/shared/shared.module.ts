import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

@NgModule({
  imports: [],
  exports: [
    HeaderComponent,
    SideBarComponent,
    BreadCrumbsComponent,
    NoPageFoundComponent
  ],
  declarations: [
    HeaderComponent,
    SideBarComponent,
    BreadCrumbsComponent,
    NoPageFoundComponent
  ],
  providers: []
})
export class SharedModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { SpotListComponent } from './spot-list/spot-list.component';
import { SpotDetailsComponent } from './spot-details/spot-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { SpotBrowsingComponent } from './spot-browsing/spot-browsing.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuIconComponent,
    SpotListComponent,
    SpotDetailsComponent,
    SpotBrowsingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

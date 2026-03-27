import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { DetailBuilderPageComponent } from './pages/detail-builder-page.component';
import { HomePageComponent } from './pages/home-page.component';
import { DeviceIdPageComponent } from './pages/deviceid-page.component';

@NgModule({
  declarations: [
    App,
    HomePageComponent,
    DeviceIdPageComponent, 
    DetailBuilderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }

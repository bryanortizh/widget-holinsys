import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailBuilderPageComponent } from './pages/detail-builder-page.component';
import { DeviceIdPageComponent } from './pages/deviceid-page.component';
import { HomePageComponent } from './pages/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'deviceid', component: DeviceIdPageComponent },
  { path: 'detail-builder', component: DetailBuilderPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

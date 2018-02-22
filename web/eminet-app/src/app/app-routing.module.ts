import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeviceviewerComponent } from './deviceviewer/deviceviewer.component'
import { DevicelistComponent } from './devicelist/devicelist.component'

const routes: Routes = [
  { path: '', redirectTo: '/deviceList', pathMatch: 'full' },
  { path: 'deviceList', component: DevicelistComponent },
  { path: 'deviceView', component: DeviceviewerComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}

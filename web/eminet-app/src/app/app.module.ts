import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { DeviceviewerComponent } from './deviceviewer/deviceviewer.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { DeviceService } from './device.service';
import { DevicelistComponent } from './devicelist/devicelist.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DeviceviewerComponent,
    DevicelistComponent
  ],
  imports: [
    NgbModule.forRoot(), BrowserModule, HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  providers: [InMemoryDataService, DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Device, DeviceDescriptor } from './device';

@Injectable()
export class DeviceService {

  private deviceListUrl = 'api/devicelist';  // URL to web api

  constructor(private http: HttpClient) { }

  getDeviceList(): Observable<Device[]> {
    return this.http.get<Device[]>(this.deviceListUrl);
  }
}

import { Component, OnInit } from '@angular/core';

import { Device, DeviceDescriptor } from '../device'
import { DeviceService } from '../device.service'

@Component({
  selector: 'app-devicelist',
  templateUrl: './devicelist.component.html',
  styleUrls: ['./devicelist.component.css']
})
export class DevicelistComponent implements OnInit {

  deviceList: Device[];


  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
  }

  getDeviceList(): void {
    this.deviceService.getDeviceList().subscribe(list => this.deviceList = list);
  }

}

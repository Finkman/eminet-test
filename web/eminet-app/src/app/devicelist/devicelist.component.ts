import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    this.getDeviceList();
  }

  getDeviceList(): void {
    this.deviceService.getDeviceList().subscribe(list => this.deviceList = list);
  }

}

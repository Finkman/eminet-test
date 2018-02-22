
export class DeviceDescriptor {
  sn: string;
  media: string;
  class: string;
  device: string;
  iVersion: number;
  fwVersion: number;
  capabilities: {
    input: object[];
    output: object[];
  };
}

export class Device {
  id: number;
  name: string;
  descriptor: DeviceDescriptor;
}

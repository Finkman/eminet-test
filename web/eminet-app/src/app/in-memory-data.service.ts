import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const devicelist = [
      {
        id: 11, name: 'Device Name' /*,
        descriptor: {
          sn: "123456789",
          media: "wired",
          class: "node",
          device: "sample device with some i/o",
          i-version: 100,
          fw-version: 100,
          capabilities: {
            input: [
              { type: "di" },
              { type: "di" },
              { type: "temp" },
              { type: "humity" }
            ],
            output: [
              { type: "do" },
              { type: "do" },
              { type: "do" },
              { type: "do" },
              { type: "pwm" },
              { type: "voltage", range: [0, 10] }
            ],
            fwupdate: false,
            persistency: false
          }
        }*/
      },
      {
        id: 11123, name: 'Device Name 2' /*,
        descriptor: {
          sn: "98765441",
          media: "wired",
          class: "node",
          device: "another device with some i/o",
          i-version: 100,
          fw-version: 100,
          capabilities: {
            input: [
              { type: "di" },
              { type: "di" },
            ],
            output: [
              { type: "do" },
              { type: "do" },
            ],
            fwupdate: false,
            persistency: false
          }
        }*/
      }
    ];
    return { devicelist };
  }
}

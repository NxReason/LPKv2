import Device from './device';

class Model {
  constructor({ uuid, name, devices }) {
    this.uuid = uuid;
    this.name = name;

    this.devices = devices.map(d => new Device(d));

    console.log(this);
  }
}

export default Model;

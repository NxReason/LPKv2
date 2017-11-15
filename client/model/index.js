import Device from './device';
import ControllerFactory from './controller/factory';
import SensorFactory from './sensor/factory';

class Model {
  constructor({ uuid, name, devices = [], sensors = [], controllers = [] }) {
    this.uuid = uuid;
    this.name = name;

    this.devices = devices.map(d => new Device(d));
    this.sensors = sensors.map(s => SensorFactory(s));
    this.controllers = controllers.map(c => ControllerFactory(c));
  }

  getDevice(uuid) {
    return this.devices.find(d => d.uuid === uuid);
  }

  setControllerValue({ uuid, value }) {
    const ctr = this.controllers.find(c => c.uuid === uuid);
    ctr.value = value;
  }
}

export default Model;

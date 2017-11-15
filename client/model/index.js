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
    return this.getElement(this.devices, uuid);
  }

  getController(uuid) {
    return this.getElement(this.controllers, uuid);
  }

  /* eslint-disable class-methods-use-this */
  getElement(coll, uuid) {
    return coll.find(el => el.uuid === uuid);
  }

  setDeviceParam({ uuid, param, delta }) {
    const device = this.getDevice(uuid);
    if (device.parameters.public[param]) {
      device.parameters.public[param].value += delta;
    } else if (device.parameters.private[param]) {
      device.parameters.private[param].value += delta;
    } else {
      console.warn('foo');
    }
  }

  setControllerValue({ uuid, value }) {
    const ctr = this.controllers.find(c => c.uuid === uuid);
    ctr.value = value;
  }
}

export default Model;

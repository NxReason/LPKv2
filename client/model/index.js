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
}

export default Model;

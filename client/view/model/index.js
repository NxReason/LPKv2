import Device from './device';
import SensorFactory from './sensor';
import ControllerFactory from './controller';
import createConnection from './connector';

const $area = document.getElementById('workarea');

const ModelView = {
  init({ devices, sensors, connections, controllers }) {
    this.devices = devices
      ? devices.map(d => new Device($area, d))
      : [];
    
    this.controllers = controllers
      ? controllers.map(c => ControllerFactory.init($area, c))
      : [];

    this.sensors = sensors
      ? sensors.map(s => SensorFactory.init($area, s))
      : [];

    this.connections = connections;

    return this;
  },

  render() {
    [this.devices, this.controllers, this.sensors]
      .forEach(group => group.forEach(el => el.render()));

    if (this.connections) {
      this.connections.forEach(conn => createConnection(conn));
    }
  },

  updateSensors(data) {
    if (data.length === 0) { return; }
    data.forEach(({ sensor, value }) => this.sensors.find(s => s.uuid === sensor).setValue(value));
  }
};

export default ModelView;

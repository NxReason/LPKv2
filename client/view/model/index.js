import Device from './device';
import SensorFactory from './sensor';
import ControllerFactory from './controller';
import createConnection from './connector';

const $area = document.getElementById('workarea');

const ModelView = {
  init({ devices, sensors, connections, controllers }) {
    this.devices = devices
      ? devices.map(d => new Device($area, `device-${d.uuid}`, d))
      : [];
    
    this.controllers = controllers
      ? controllers.map(c => ControllerFactory.init($area, `controller-${c.uuid}`, c))
      : [];

    this.sensors = sensors
      ? sensors.map(s => SensorFactory.init($area, `sensor-${s.uuid}`, s))
      : [];

    // this.connections = connections;

    return this;
  },

  render() {
    [this.devices, this.controllers, this.sensors]
      .forEach(group => group.forEach(el => el.render()));

    // if (this.connections) {
    //   this.connections.forEach(conn => createConnection(conn));
    // }
  },

  setRangeValue(data) {
    Controller.setRangeValue(data);
  }
};

export default ModelView;

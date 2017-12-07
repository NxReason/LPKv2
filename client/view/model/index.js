import Device from './device';
import SensorFactory from './sensor';
import Controller from './controller';

const $area = document.getElementById('workarea');

const ModelView = {
  init({ devices, sensors, connections, controllers }) {
    this.devices = devices
      ? devices.map(d => new Device($area, `device-${d.uuid}`, d))
      : [];
    
    this.controllers = [];

    this.sensors = sensors
      ? sensors.map(s => SensorFactory.init($area, `sensor-${s.uuid}`, s))
      : [];

    this.connections = connections || [];

    return this;
  },

  render() {
    [this.devices, this.controllers, this.sensors]
      .forEach(group => group.forEach(el => el.render()));
  },

  setRangeValue(data) {
    Controller.setRangeValue(data);
  }
};

export default ModelView;

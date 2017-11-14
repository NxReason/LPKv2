import WorkArea from './workarea';
import Device from './device';
import Sensor from './sensor';
import Controller from './controller';

const ModelView = {
  render({ devices = [], sensors = [], connections = [], controllers = [] }) {
    WorkArea.clear();

    const devicesHtml = devices.map(el => Device.getHtml(el));
    const sensorsHtml = sensors.map(el => Sensor.getHtml(el));
    const controllersHtml = controllers.map(el => Controller.getHtml(el));

    WorkArea.fill({
      devices: devicesHtml,
      connections,
      sensors: sensorsHtml,
      controllers: controllersHtml
    });
  }
};

export default ModelView;

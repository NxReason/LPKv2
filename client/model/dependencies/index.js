import EventTypes from 'config/eventTypes';
import ControllerDeviceDependency from './CD';
import DeviceDeviceDependency from './DD';
import DeviceSensorDependency from './DS';

class DependenciesManager {
  constructor(deps) {
    this.cd = [];
    this.dd = [];
    this.ds = [];

    deps.forEach(d => {
      switch (d.type) {
        case EventTypes.CD:
          this.cd.push(new ControllerDeviceDependency(d));
          break;
        case EventTypes.DD:
          this.dd.push(new DeviceDeviceDependency(d));
          break;
        case EventTypes.DS:
          this.ds.push(new DeviceSensorDependency(d));
          break;
        default:
          throw new Error(`[Error] Invalid event type: ${d.type}`);
      }
    });
  }

  getResponseCD({ uuid, value, oldValue }) {
    return this.cd.reduce((actions, dep) => {
      if (dep.controller === uuid) { actions = actions.concat(dep.getActions(value, oldValue)); }
      return actions;
    }, []);
  }

  getResponseDD({ deviceId, paramId, oldValue, newValue }) {}

  getResponseDS({ device, parameter: { uuid, value } }) {
    // console.log(data);
    // return this.ds.map(dep => {
    //   if (dep.device === device && dep.parameter === parameter.uuid) {
    //
    //   }
    // });
    return this.ds
      .filter(dep => dep.device === device && dep.parameter === uuid)
      .map(dep => dep.createResponse(value));
  }
}

export default DependenciesManager;

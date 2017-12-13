import DependencyTypes from 'config/dependencyTypes';
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
        case DependencyTypes.CD:
          this.cd.push(new ControllerDeviceDependency(d));
          break;
        case DependencyTypes.DD:
          this.dd.push(new DeviceDeviceDependency(d));
          break;
        case DependencyTypes.DS:
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

  getResponseDD({ device, parameter: { uuid, value, oldValue } }) {
    return this.dd
      .filter(dep => dep.isMatch(device, uuid))
      .map(dep => dep.createResponse(value, oldValue));
  }

  getResponseDS({ device, parameter: { uuid, value } }) {
    return this.ds
      .filter(dep => dep.device === device && dep.parameter === uuid)
      .map(dep => dep.createResponse(value));
  }
}

export default DependenciesManager;

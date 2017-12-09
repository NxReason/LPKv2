import fnTypes from 'config/depFnTypes';
import deviceMethods from 'config/deviceMethods';

class ControllerDeviceDependency {
  constructor({ controller, device: { uuid, parameters } }) {
    this.controller = controller;
    this.device = uuid;
    this.parameters = parameters;
  }

  getActions(value, oldValue) {
    return this.parameters.map((p) => {
      const response = { device: this.device, parameter: p.uuid };
      switch (p.fn) {
        case fnTypes.DIFF:
          response.type = deviceMethods.CHANGE;
          response.value = value ? p.value : -p.value;
          break;
        case fnTypes.LINEAR:
          response.type = deviceMethods.CHANGE;
          response.value = value - oldValue;
          break;
        default:
          throw new Error(`[Error] Invalid function type ${p.fn} in Controller-Device (${this.controller}-${this.device}) dependency`)
      }
      return response;
    });
  }
}

export default ControllerDeviceDependency;

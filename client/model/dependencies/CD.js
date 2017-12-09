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
      switch (p.fn) {
        case fnTypes.DIFF:
          let diff = p.value;
          if (!value) {
            diff = -diff;
          }
          return { device: this.device, parameter: p.uuid, type: deviceMethods.CHANGE, value: diff };
          break;
        case fnTypes.LINEAR:
          break;
        default:
          throw new Error(`[Error] Invalid function type ${p.fn} in Controller-Device (${this.controller}-${this.device}) dependency`)
      }
    });
  }
}

export default ControllerDeviceDependency;

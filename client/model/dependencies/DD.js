import depFnTypes from 'config/depFnTypes';
import deviceMethods from 'config/deviceMethods';

class DeviceDeviceDependency {
  constructor({ source, target, fn }) {
    this.source = source;
    this.target = target;
    this.fn = fn;
  }

  isMatch(uuid, parameter) {
    return this.source.uuid === uuid && this.source.parameter === parameter;
  }

  createResponse(value, oldValue) {
    const response = { device: this.target.uuid, parameter: this.target.parameter };
    switch (this.fn.type) {
      case depFnTypes.LINEAR:
        response.type = deviceMethods.CHANGE;
        response.value = value - oldValue;
        break;
      case depFnTypes.MATH_POW:
        response.type = deviceMethods.CHANGE;
        const oldDelta = Math.pow(oldValue - this.fn.anchor, this.fn.power);
        const oldSign = oldValue > this.fn.anchor;
        const newDelta = Math.pow(value - this.fn.anchor, this.fn.power);
        const newSign = value > this.fn.anchor;
        response.value = (newSign ? newDelta : -newDelta) - (oldSign ? oldDelta : -oldDelta);
        break;
      default:
        throw new Error(`[Error] Invalid function type (${this.fn.type}) in Device-Device (${this.source.uuid}-${this.target.uuid}) dependency`);
    }

    return response;
  }
}

export default DeviceDeviceDependency;

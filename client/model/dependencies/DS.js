class DeviceSensorDependency {
  constructor({ device, parameter, sensor }) {
    this.device = device;
    this.parameter = parameter;
    this.sensor = sensor;
  }

  createResponse(value) {
    return {
      sensor: this.sensor,
      value
    };
  }
}

export default DeviceSensorDependency;

import Device from './device';

class ModelDAO {
  constructor(devices) {
    this.devices = devices
      .map(d => new Device(d))
      .reduce((acc, d) => { acc[d.uuid] = d; return acc; }, {});
  }
}

export default ModelDAO;

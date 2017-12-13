import Device from './device';
import EventEffectTypes from 'config/eventEffectTypes';

class ModelDAO {
  constructor(devices) {
    this.devices = devices
      .map(d => new Device(d))
      .reduce((acc, d) => { acc[d.uuid] = d; return acc; }, {});
  }

  handleEvent({ effects }) {
    effects.forEach(({ device, parameter, type, value }) => {
      let handler = '';
      switch (type) {
        case EventEffectTypes.SET:
          handler = 'setParam';
          break;
        case EventEffectTypes.CHANGE:
          handler = 'changeParam';
          break;
        default:
          throw new Error(`[Error] Invalid event-effect type: ${type}`);
      }
      this.devices[device][handler](parameter, value);
    })
  }
}

export default ModelDAO;

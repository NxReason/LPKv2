import EventEmitter from '../util/eventEmitter';
import Types from './types';

import { linear, diff } from './fn';

const fnMapping = {
  LINEAR: linear,
  DIFF: diff
};

const cd = {
  entries: [],

  isSource(uuid) {
    if (this.entries.find(entry => entry.controller === uuid)) {
      return true;
    }
    return false;
  },

  updateDevices({ uuid, oldValue, newValue }) {
    this.entries
      .filter(e => e.controller === uuid)
      .forEach((channel) => { // Для каждого канал, который зависит от данного контроллера
        const { device } = channel;
        device.parameters.forEach((p) => { // Для каждого свойства в канале
          const delta = fnMapping[p.fn](oldValue, newValue);
          EventEmitter.emit('DVC_PARAM_CHANGED', {
            uuid: device.uuid,
            param: p.uuid,
            delta
          });
        });
      });
  }
};
const ds = [];
const dd = [];

const Channels = {
  init(data) {
    data.forEach((channel) => {
      switch (channel.type) {
        case Types.DS:
          console.log('DS');
          break;
        case Types.CD:
          this.cd.entries.push(channel);
          break;
        case Types.DD:
          console.log('DD');
          break;
        default:
          break;
      }
    });
  },

  cd,
  ds,
  dd
};

export default Channels;

import sensorTypes from 'config/sensorTypes';
import TextSensor from './textSensor';

const Factory = {
  init(parent, payload) {
    switch (payload.type) {
      case sensorTypes.TEXT:
        return new TextSensor(parent, payload);
      default:
        throw new Error(`[Error] Invalid sensor type: ${payload.type}`);
    }
  }
};

export default Factory;

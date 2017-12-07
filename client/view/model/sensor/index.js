import sensorTypes from 'config/sensorTypes';
import TextSensor from './textSensor';

const Factory = {
  init(parent, id, payload) {
    switch (payload.type) {
      case sensorTypes.TEXT:
        console.log(payload);
        return new TextSensor(parent, id, payload)
      default:
        throw new Error(`[Error] Invalid sensor type: ${sensor.type}`);
    }
  }
}

export default Factory;
